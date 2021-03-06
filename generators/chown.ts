import { Generator, common } from "../utils";
import * as ut from "../utils";

const items = {
  verbose: {
    name: {
      en: 'output a diagnostic for every file processed',
      'zh-CN': '显示每个文件的变更信息',
    },
    cmd: ['-v', '--verbose'],
  },
  changes: {
    name: {
      en: 'output a diagnostic for every file processed, only display changed',
      'zh-CN': '显示每个文件的变更信息, 仅显示有改变的',
    },
    cmd: ['-c', '--changes'],
  },
  silent: {
    name: {
      en: 'suppress most error messages',
      'zh-CN': '禁止显示大多数错误消息',
    },
    cmd: ['-f', '--silent', '--quiet'],
  },
  noDereference: {
    name: {
      en: 'Affect symbolic links instead of any referenced file (useful only on systems that can change the ownership of a symlink).',
      'zh-CN': '处理符号链接本身, 而不是其指向的文件.',
    },
    cmd: ['-h', '--no-dereference'],
  },
}

const controls: ut.controlsObject = {
  fromUser: {
    name: {
      en: `Only change matched user`,
      'zh-CN': '只改变匹配的用户',
    },
    description: {
      en: `Change the owner and/or group of each file only if its current owner match those specified here.`,
    },
    type: 'string',
    cmd: ['--from'],
    getCmd: info => {
      const group = info.usage.form.controls.concat(info.usage.form.advanced).find(v => v.id === 'fromGroup')
      let r = info.control.value || ''
      if (group.value) {
        r += ':' + group.value
      }
      if (r) {
        r = '--from ' + r
      }
      return <string>r
    },
  },
  fromGroup: {
    id: 'fromGroup',
    name: {
      en: `Only change matched group`,
      'zh-CN': '只改变匹配的用户组',
    },
    description: {
      en: `Change the owner and/or group of each file only if its current group match those specified here.`,
    },
    type: 'string',
    cmd: ['--from'],
    ignoreValue: true,
  },
}

const generatorInfo:Generator = {
  name: 'chown',
  description: {
    en: 'chown changes the user and/or group ownership of each given file.',
    'zh-CN': '把文件或者目录的权限分配给某用户或者组.',
  },
  contributors: [{name: 'phphe', url: 'https://github.com/phphe'}],
  usages: [
    {
      name: {en: 'Change ownership', 'zh-CN': '改变归属'},
      form: {
        controls: [
          {...common.fileOrDir, multiple: true, cmdPriority: 2, type: 'string'},
          {
            id: 'owner',
            name: {en: 'Owner', 'zh-CN': '用户'},
            type: 'string',
            getCmd: info => {
              const group = info.usage.form.controls[2]
              let r = info.control.value || ''
              if (group.value) {
                r += ':' + group.value
              }
              return <string>r
            }
          },
          {
            id: 'group',
            name: {en: 'Group', 'zh-CN': '用户组'},
            description: {
              en: `Left blank if you don't want to change it.`,
              'zh-CN': '留空则不改变.',
            },
            type: 'string',
            ignoreValue: true,
          },
          {
            ...common.others,
            type: 'check',
            items: [
              {
                name: {en: 'Change files and directories recursively', 'zh-CN': '递归地更改文件和目录'},
                cmd: ['-R', '--recursive'],
              },
              items.silent,
              items.noDereference,
            ],
          },
          {
            ...common.others,
            type: 'check',
            multiple: false,
            items: [
              {...items.verbose, defaultValue: true},
              {...items.changes},
            ]
          },
        ],
        advanced: [
          controls.fromUser,
          controls.fromGroup,
        ],
      },
    },
    {
      name: {en: 'Copy ownership', 'zh-CN': '克隆归属'},
      description: {
        en: 'Copy ownership from one file or directory to others.',
        'zh-CN': '使文件或目录的归属和指定文件一样.',
      },
      form: {
        controls: [
          {...common.fileOrDir, multiple: true, type: 'string'},
          {
            name: {en: 'Copy from', 'zh-CN': '目标文件/目录'},
            type: 'string',
            cmd: ['--reference'],
          },
          {
            ...common.others,
            type: 'check',
            items: [
              {
                name: {en: 'Change files and directories recursively', 'zh-CN': '递归地更改文件和目录'},
                cmd: ['-R', '--recursive'],
              },
              items.silent,
              items.noDereference,
            ],
          },
          {
            ...common.others,
            type: 'check',
            multiple: false,
            items: [
              {...items.verbose, defaultValue: true},
              {...items.changes},
            ]
          },
        ],
        advanced: [
          controls.fromUser,
          controls.fromGroup,
        ],
      }
    },
  ],
}

export default generatorInfo