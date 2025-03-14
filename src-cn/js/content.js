const allData = [
  // 全局导航栏相关
  ['Home', '主页'],
  ['Explore', '探索'],
  ['Marketplace', '市场'],
  ['Following', '关注者'],
  ['Search or jump to…', '搜索并跳转至...'],
  ['Find a repository…', '查找仓库'],
  ['Your profile', '个人信息'],
  ['Your repositories', '个人仓库'],
  ['Codespaces', '代码空间'],
  ['Your codespaces', '你的代码空间'],
  ['Your projects', '你的项目'],
  ['Signed in as', '登陆账户为'],
  ['Feature preview', '功能预览'],
  ['Upgrade', '升级'],
  ['Try Enterprise', '尝试企业版'],
  ['Help', '帮助'],
  ['Settings', '设置'],
  ['Sign out', '退出'],

  // 仓库列表相关
  ['Create', '创建'],
  ['Create list', '创建列表'],
  ['Create a list to organize your starred repositories.', '创建一个列表来组织你的收藏的仓库。'],
  ['⭐️ Name this list', '⭐️ 给这个列表起个名字'],
  ['Write a description', '写一个描述'],
  ['Tip: type : to add emoji to the name or description.', '提示：在名字或描述中键入 : 来添加表情符号。'],
  ['Top repositories', '热门仓库'],
  ['Recent Repositories', '最近仓库'],
  ['Pinned', '置顶'],
  ['Unpinned', '取消置顶'],
  ['Unpin this repository from your profile', '从你的个人资料中取消置顶此仓库'],
  ['Pin', '置顶'],
  ['Pin this repository to your profile', '将此仓库置顶到你的个人资料'],
  ['Popular repositories', '流行的仓库'],
  ['Customize your pins', '定义你的置顶项目'],

  // 仓库操作相关
  ['Create a repository', '创建一个仓库'],
  ['Import a repository', '导入一个仓库'],
  ['Create an organization', '创建一个组织'],
  ['Create a new release', '创建一个新的版本'],
  ['Publish a package', '发布一个包'],
  ['Publish your first package', '发布你的第一个包'],
  ['New repository', '新建仓库'],
  ['Import repository', '导入仓库'],
  ['New organization', '新建组织'],
  ['New project', '新建项目'],
  ['Create new file', '创建新的文件'],
  ['Upload files', '上传文件'],
  ['New codespace', '新建代码空间'],

  // 仓库详情页相关
  ['Overview', '概述'],
  ['Repositories', '仓库'],
  ['Projects', '项目'],
  ['Packages', '包'],
  ['Code', '代码'],
  ['Go to file', '转至文件'],
  ['Add file', '添加文件'],
  ['About', '关于'],
  ['Releases', '发布'],
  ['Languages', '语言'],
  ['Show more', '显示更多'],
  ['Recent activity', '最新动态'],
  [
    'When you take actions across GitHub, we’ll provide links to that activity here.',
    '当你在 GitHub 上采取行动时，我们会在这里提供该活动的链接。'
  ],
  ['More', '更多'],
  ['Subscribe to your news feed', '订阅你的动态源'],
  ['Activity  overview', '活动概览'],
  ['Security', '安全'],
  ['Insights', '统计'],
  ['Local', '本地'],
  ['Clone', '克隆'],
  ['Open with GitHub Desktop', '在 Github 桌面程序中打开'],
  ['Download ZIP', '下载压缩包'],
  ['Less', '更少'],
  ['Select type', '选择类型'],
  ['Type', '类型'],
  ['Language', '语言'],
  ['Sort', '排序'],
  ['Private', '私有'],
  ['You choose who can see and commit to this repository', '你可以选择谁可以看到和提交这个版本库'],
  ['Public', '公开'],
  ['Anyone on the internet can see this repository', '互联网上的任何人都可以看到这个存储库'],
  ['Select language', '选择语言'],
  ['Introduce yourself with a profile README', '用一个简介来介绍自己'],
  ['Share information about yourself by creating a profile README, which appears at the top of your profile page.', '通过创建一个简介来介绍自己，它出现在你的个人资料页面的顶部。'],
  ['Select order', '选择顺序'],
  ['Last updated', '最近更新'],
  ['Owner', '拥有者'],
  ['Repository name', '仓库名字'],
  ['Description', '描述'],
  ['(optional)', '(可选)'],
  ['Yesterday', '昨天'],
  [
    'Anyone on the internet can see this repository. You choose who can commit.',
    '互联网上的任何人都可以看到这个存储库。你选择谁能够提交。'
  ],
  [
    'You choose who can see and commit to this repository.',
    '你可以选择谁可以看到和提交这个版本库。'
  ],
  [
    'A repository contains all project files, including the revision history. Already have a project repository elsewhere?',
    '一个仓库包含所有项目文件，包括修订历史。在其他地方已经有一个项目库了？'
  ],
  ['Import a repository.', '导入仓库'],
  [
    'Skip this step if you’re importing an existing repository.',
    '如果你要导入一个已有的版本库，请跳过这一步。'
  ],
  [
    'Choose which files not to track from a list of templates.',
    '从一个模板列表中选择哪些文件不需要跟踪。'
  ],
  [
    'This is where you can write a long description for your project.',
    '在这里，你可以为你的项目写一个长的描述。'
  ],
  [
    'A license tells others what they can and can\'t do with your code.',
    '许可证告诉别人他们可以和不可以用你的代码做什么。'
  ],
  [
    'You are creating a public repository in your personal account.',
    '你正在你的个人账户中创建一个公共库。'
  ],
  ['Initialize this repository with:', '用以下方式初始化这个存储库：'],
  ['Create repository', '创建仓库'],
  ['Create a new repository', '创建一个新的仓库'],
  ['A repository contains all project files, including the revision history.', '一个仓库包含所有项目文件，包括修订历史。'],
  ['Already have a project repository elsewhere?', '已经有一个项目库了吗？'],
  ['Required fields are marked with an asterisk (*).', '必填字段用星号标记 (*)。'],
  [
    'Great repository names are short and memorable. Need inspiration? How about',
    '伟大的仓库名称是简短而令人难忘的。需要灵感吗？例如 '
  ],
  ['Add a README file', '添加一个 README 文件'],
  ['Learn more about READMEs.', '了解更多关于 README 的信息。'],
  ['Add .gitignore', '添加 .gitignore 文件'],
  ['.gitignore template', '.gitignore 模板'],
  ['Learn more about ignoring files.', '了解更多关于git忽略文件的信息。'],
  ['License', '许可证'],
  ['None', '无'],
  ['Learn more about licenses.', '了解更多关于许可证的信息。'],
  ['Recently viewed', '最近浏览'],
  ['Created by me', '由我创建'],
  ['Welcome to projects', '欢迎来到项目'],
  ['Built like a spreadsheet, project tables give you a live canvas to filter, sort, and group issues and pull requests. Tailor them to your needs with custom fields and saved views.', '像电子表格一样，项目表给你一个实时的画布来过滤、排序和分组问题和合并请求。根据你的需要用自定义字段和保存的视图来定制它们。'],


  // 个人设置相关
  ['Your personal account', '你的个人账户'],
  ['Public profile', '公开资料'],
  ['Name', '名字'],
  ['Change username', '修改用户名'],
  ['Account', '账户'],
  ['Export account data', '导出账户数据'],
  ['Appearance', '外观'],
  ['Accessibility', '无障碍设施'],
  ['Notifications', '通知'],
  ['Access', '访问'],
  ['Personal billing', '个人帐单'],
  ['Emails', '邮件'],
  ['Billing and plans', '账单和计划'],
  [
    'This is a list of SSH keys associated with your account. Remove any keys that you do not recognize.',
    '这是与你的账户相关的 SSH 密钥的列表，删除任何你不认识的密钥'
  ],
  ['Organizations', '组织'],
  ['You are not a member of any organizations.', '你不是任何组织的成员  '],
  ['Archives', '归档'],
  ['Security log', '安全日志'],
  ['Sponsorship log', '赞助日志'],
  ['No sponsorship activity in this time period', '这段时间内没有赞助活动'],

  // 登录相关
  ['Sign in to GitHub', '登录到 Github'],
  ['Username or email address', '用户名或邮箱'],
  ['Password', '密码'],
  ['Sign in', '登录'],
  ['New to GitHub?', '刚来 Github？'],
  ['Create an account', '创建一个账户'],
  ['Forgot password?', '忘记密码？'],

  // 问题与合并请求相关
  ['Issues', '问题'],
  ['Pull', '拉取'],
  ['request', '请求'],
  ['Pull requests', '合并请求'],
  ['Review requests', '审核请求'],
  ['New Issue', '新问题'],
  ['There aren’t any open issues.', '没有任何公开的问题。'],
  [
    'Label issues and pull requests for new contributors',
    '为新的贡献者标记问题和合并请求'
  ],
  ['Filters', '过滤'],

  // 仓库设置相关
  ['Edit repository details', '编辑仓库详情信息'],
  ['Website', '网站'],
  ['Cancel', '取消'],
  ['Save changes', '保存修改'],
  ['Protect this branch', '保护这个分支'],
  ['Get started with GitHub Actions', '开始使用 Github Actions'],
  [
    'Build, test, and deploy your code. Make code reviews, branch management, and issue triaging work the way you want. Select a workflow to get started.',
    '构建、测试和部署你的代码。使代码审查、分支管理和问题分流以你想要的方式进行。选择一个工作流程来开始。'
  ],
  ['Browse all categories', '浏览所有类型'],
  ['Automation', '自动化'],
  ['Deployment', '部署'],
  ['Continuous integration', '持续集成'],
  ['Reporting', '报告'],
  ['General', '常规'],

  // 个人资料编辑相关
  ['Public email', '公开邮箱'],
  ['Bio', '个人简介'],
  ['URL', '网站'],
  ['Twitter username', 'Twitter 用户名'],
  ['Company', '公司'],
  ['Location', '地址'],
  ['Contributions & Activity', '贡献和活动'],
  ['Successor settings', '继承人设置'],
  ['You have not designated a successor.', '你还没有指定继承人'],
  ['Delete account', '删除账户'],
  [
    'Once you delete your account, there is no going back. Please be certain.',
    '一旦你删除了你的账户，就不能够找回了，请慎重'
  ],
  ['Display current local time', '显示当前的本地时间'],
  ['Keyboard shortcuts', '快捷键'],
  ['Subscriptions', '订阅'],
  ['Verified domains', '验证的域名'],
  ['There are no verified domains.', '没有经过验证的域名'],
  ['Password and authentication', '密码和身份验证'],
  ['Change password', '修改密码'],
  ['Old password', '旧密码'],
  ['New password', '新密码'],
  ['Confirm new password', '确认新的密码'],
  ['Two-factor authentication', '双因素认证'],
  ['Confirm access', '确认访问'],
  ['Confirm', '确认'],
  ['Who has access', '谁有权限'],
  ['Code and automation', '代码和自动化'],
  ['Default branch', '默认分支'],
  ['Branch protection rules', '分支保护规则'],
  ['Protected tags', '保护标签'],
  ['Environments', '环境变量'],
  ['Code security and analysis', '代码安全性和分析'],
  ['Integrations', '集成'],
  ['Email notifications', '邮件通知'],
  ['Collaborators', '合作者'],
  ['Contributors', '贡献者'],
  ['Community Standards', '社区标准'],
  ['Traffic', '流量'],
  ['Code frequency', '代码频率'],
  ['Dependency graph', '依赖图'],
  ['You can', '你可以'],
  ['@mention', '@'],
  [
    'other users and organizations to link to them.',
    '其他用户和组织来链接它们'
  ],
  ['Save', '保存'],
  ['Cancel', '取消'],

  // 项目相关
  ['Welcome to the all-new projects', '欢迎来到全新的项目'],
  ['No open projects', '没有开放的项目'],
  ['Add a bio', '添加个人简介'],
  ['Loading more...', '正在加载中'],
  [
    'Your popular repositories will now be shown instead of your pins.',
    '你的热门仓库现在将显示，而不是你的置顶'
  ],
  ['Unpin', '不置顶'],
  ['Your pins have been updated.', '你的置顶已经更新了'],
  ['Advanced search', '高级搜索'],
  ['Branches', '分支'],
  ['Social Preview', '社交预览'],
  [
    'Upload an image to customize your repository’s social media preview.',
    '上传图片来定制你仓库的社交媒体预览'
  ],
  ['Pull Requests', '合并请求'],
  ['Danger Zone', '危险区'],
  ['Change repository visibility', '修改仓库的可见性'],
  ['Transfer ownership', '转让所有权'],
  ['This repository is currently public.', '这个仓库当前是公开的'],
  ['Archive this repository', '归档这个仓库'],
  [
    'Mark this repository as archived and read-only.',
    '将此版本库标记为归档和只读'
  ],
  ['Delete this repository', '删除这个仓库'],
  [
    'Once you delete a repository, there is no going back. Please be certain.',
    '一旦你删除了这个仓库，就不能够撤回了，请确认'
  ],
  ['Are you absolutely sure?', '你真的确定吗？'],
  ['Change visibility', '修改可见性'],
  ['Change to private', '修改为私有'],
  ['Transfer', '转移'],
  ['Edit status', '编辑状态'],
  ['Busy', '忙'],
  ['Clear status', '清除状态'],
  ['Never', '从不'],
  ['Your main branch isn\'t protected', '你的 main 分支不是受保护的'],
  [
    'Protect this branch from force pushing or deletion, or require status checks before merging.',
    '保护这个分支不被强行推送或删减，或要求在合并前进行状态检查 '
  ],
  ['Learn more', '学习更多'],
  ['Branch protection rule', '分支保护规则'],
  ['Protect your most important branches', '保护你最重要的分支'],
  ['Achievements', '成就'],
  ['Send feedback', '发送反馈'],
  ['Choose a license', '选择许可证'],
  ['Learn more.', '学习更多'],
  ['Import your project to GitHub', '导入你的项目到 Github'],
  ['Import all the files, including revision history, from another version control system.', '导入所有文件，包括修订历史，从另一个版本控制系统。'],
  ['Support for importing Mercurial, Subversion and Team Foundation Version Control (TFVC) repositories ended on April 12, 2024. For more details, see the', '导入 Mercurial、Subversion 和 Team Foundation Version Control (TFVC) 仓库的支持已于 2024 年 4 月 12 日结束。有关更多详细信息，请参阅'],
  ['changelog.', '更新日志。'],
  ['Your source repository details', '你的源仓库详情'],
  ['The URL for your source repository', '你的源仓库的 URL'],
  ['Learn more about', '了解更多关于'],
  ['importing git repositories', '导入 git 仓库'],
  ['Please enter your credentials if required for cloning your remote repository.', '请输入你的凭据，如果需要克隆你的远程仓库。'],
  ['Your username for your source repository', '你的源仓库的用户名'],
  ['Your access token or password for your source repository', '你的源仓库的访问令牌或密码'],
  ['Your new repository details', '你的新仓库详情'],
  ['Begin import', '开始导入'],
  ['Contact', '联系支持'],
  ['Manage cookies', '管理Cookie'],



  //问题相关与高级搜索相关
  ['Created', '创建'],
  ['Assigned', '分配'],
  ['Mentioned', '提及'],
  ['Closed', '关闭'],
  ['Reopened', '重新打开'],
  ['Assignees', '分配者'],
  ['Open', '打开'],
  ['Repository visibility', '仓库可见性'],
  ['Private repositories only', '仅私有仓库'],
  ['Public repositories only', '仅公开仓库'],
  ['All repositories', '所有仓库'],
  ['Visibility', '可见性'],
  ['Organization', '组织'],
  ['Filter by organization or owner', '按组织或所有者过滤'],
  ['Filter organizations', '过滤组织'],
  ['No results matched your search.', '没有结果匹配您的搜索。'],
  ['You could search', '你可以搜索'],
  ['all of GitHub', '所有Github内容'],
  ['or try an', '或尝试'],
  ['advanced search', '高级搜索'],
  ['on any issue or pull request to go back to the issue listing page.', '在任何问题或拉取请求上返回问题列表页面。'],
  ['Search GitHub', '搜索Github'],
  ['Tip', '提示'],
  ['For an', '对于'],
  [', use our', '，使用我们的'],
  ['prefixes', '前缀'],
  ['Advanced options', '高级选项'],
  ['Search', '搜索'],
  ['Search issues and pull requests', '搜索问题和拉取请求'],
  ['Search issues and pull requests on GitHub', '在Github上搜索问题和拉取请求'],
  ['From these owners', '从这些所有者'],
  ['In these repositories', '从这些仓库'],
  ['Created on the dates', '从这些日期上创建'],
  ['Written in this language', '使用这个语言编写'],
  ['Any luanguage', '任何语言'],
  ['Repositories options', '仓库选项'],
  ['With this many stars', '带有这个数量的stars'],
  ['With this many forks', '带有这个数量的forks'],
  ['With this many issues', '带有这个数量的问题'],
  ['With this many pull requests', '带有这个数量的拉取请求'],
  ['With this many commits', '带有这个数量的提交'],
  ['With this many branches', '带有这个数量的分支'],
  ['With this many releases', '带有这个数量的发布'],
  ['With this many contributors', '带有这个数量的贡献者'],
  ['With this many followers', '带有这个数量的关注者'],
  ['With this many following', '带有这个数量的关注'],
  ['Of this size', '这个大小'],
  ['Pushed to', '推送至'],
  ['With this license', '带有这个许可证类型'],
  ['Return repositories', '返回仓库'],
  ['not', '不'],
  ['and', '和'],
  ['only', '仅'],
  ['including forks.', '包括forks。'],
  ['Code options', '代码选项'],
  ['With this extension', '带有这个扩展'],
  ['In this path', '在这个路径'],
  ['With this file name', '带有这个文件名'],
  ['Return code', '返回代码'],
  ['Issues options', '问题选项'],
  ['In the state', '在这个状态'],
  ['With the reason', '带有这个原因'],
  ['With this many comments', '带有这个数量的评论'],
  ['With the labels', '带有这些标签'],
  ['Opened by the author', '由作者打开'],
  ['Mentioning the users', '提及这些用户'],
  ['Assigned to the users', '分配给这些用户'],
  ['Updated before the date', '更新日期之前'],
  ['Users options', '用户选项'],
  ['With this full name', '带有这个全名'],
  ['From this location', '来自这个位置'],
  ['With this many public repositories', '带有这个数量的公开仓库'], 
  ['Working in this language', '使用这个语言编写'],
  ['Wiki options', 'wiki选项'],
  ['Updated before the date', '更新日期之前'],
  


  // 讨论与代码空间相关
  ['Commented', '评论'],
  ['No discussions match the selected filters.', '没有讨论匹配所选的过滤器。'],
  ['Discussions are used to ask questions and have open-ended conversations.', '讨论用于提问和有开放式的对话。'],
  ['All', '全部'],
  ['Templates', '模板'],
  ['Your instant dev environment', '你的即时开发环境'],
  ['Go from code to commit faster on any project.', '从代码到提交更快的项目。'],
  ['Go to docs', '转到文档'],
  ['Explore quick start templates', '探索快速启动模板'],
  ['Start with a blank canvas or import any packages you need.', '从空白画布开始，或者导入你需要的任何包。'],
  ['A popular JavaScript library for building user interfaces based on UI components.', '一个基于 UI 组件构建用户界面的流行的 JavaScript 库。'],
  ['JupyterLab is the latest web-based interactive development environment for notebooks, code, and data.', 'JupyterLab 是最新的基于网络的交互式开发环境，用于笔记本、代码和数据。'],
  ['A full-stack web application template written in C# leveraging the power of .NET 8.', '一个用 C# 编写的全栈网络应用程序模板，利用.NET 8 的强大功能。'],
  ['A full-stack web framework for building dynamic websites that deliver a rich user experience.', '一个用于构建动态网站的全栈网络框架，提供丰富的用户体验。'],
  ['Express is a minimal and flexible Node.js web application framework.', 'Express 是一个最小和灵活的 Node.js 网络应用程序框架。'],
  ['Next.js is a React framework that gives you building blocks to create web applications.', 'Next.js 是一个 React 框架，为您提供构建网络应用程序的构建块。'],
  ['Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.', 'Django 是一个高级的 Python 网络框架，鼓励快速开发和干净、务实的设计。'],
  ['Flask is a lightweight web application framework.', 'Flask 是一个轻量级的网络应用程序框架。'],
  ['A fast 3kB alternative to React with the same modern API.', 'React 的 3kB 快速替代品，具有相同的现代 API。'],
  ['Codespace could not be created: Oid is missing, please ensure you specified a valid ref (branch name or commit SHA) or pull request number.', '无法创建代码空间：Oid 丢失，请确保您指定了有效的 ref（分支名称或提交 SHA）或拉取请求编号。'],
  ['See all', '查看全部'],
  ['Use this template', '使用这个模板'],
  ['Getting started with GitHub Codespaces', '开始使用 GitHub Codespaces'],
  ['Learn core concepts', '了解核心概念'],
  ['Configure and manage', '配置和管理'],
  ['Develop locally', '本地开发'],
  ['New to Codespaces?', '新的代码空间？'],
  ['Start here', '从这里开始'],
  ['. Learn the core concepts and how to get started.', '。学习核心概念和如何开始。'],
  ['Learn more about features like', '了解更多关于以下功能的信息'],
  ['secret management', ' 秘密管理'],
  ['port forwarding','端口转发'],
  ['Access codespaces from within','从应用程序访问代码空间，例如'],
  ['or', '或'],
  
  // 404相关
  ['It looks like this page doesn\'t exist.','看起来这个页面不存在。'],
  ['We track these errors automatically, but if the problem persists please feel free to contact us.','我们会自动跟踪这些错误，但如果问题仍然存在，请随时联系我们。'],
  ['Contact support','联系支持'],
  ['Find code, projects, and people on GitHub:','在 GitHub 上找到代码、项目和人：'],
  ['GitHub Status','GitHub 状态'],


  // 通知相关
  ['Inbox', '收件箱'],
  ['Prev', '上页'],
  ['Next', '下页'],
  ['Saved', '保存'],
  ['Done', '完成'],
  ['Manage notifications', '管理通知'],
  ['See more', '查看更多'],
  ['Include in the home page', '显示在页面上'],
  ['Discussions', '讨论'],
  ['Users', '用户'],
  ['This repository is currently private.', '这个仓库当前是私有的'],
  ['Lists', '列表'],
  ['Create list', '创建列表'],
  ['Pushes', '推送'],
  [
    'Limit how many branches and tags can be updated in a single push',
    '限制一次推送中可以更新多少个分支和标签'
  ],
  ['I want to make this repository private', '我想要让这个仓库变为私有'],
  ['I have read and understand these effects', '我已经阅读并理解了这些影响'],
  ['New issue', '新建问题'],
  ['Labels', '标签'],
  ['New milestone', '新建里程碑'],
  ['Milestones', '里程碑'],
  ['You haven’t created any Milestones.', '你还没有创建任何里程碑。'],
  ['Edit', '编辑'],
  ['Delete', '删除'],
  ['Close', '关闭'],
  ['Success', '完成'],
  ['Dashboard', '仪表盘'],
  ['to search', '搜索'],
  ['Create your first project', '创建您的第一个项目'],
  [
    'Ready to start building? Create a repository for a new idea or bring over an existing repository to keep contributing to it.',
    '准备好开始构建了吗？为新的想法创建一个存储库，或导入一个存储库以继续为它做出贡献。'
  ],
  ['Filter', '筛选'],
  ['Events', '活动'],
  ['Activity you want to see on your feed', '您希望在动态源中看到的活动'],
  ['Stars', '星'],
  ['main', '主干'],
  ['Default', '默认值'],
  ['Tags', '标签'],
  ['Watch', '查看'],
  ['Fork', '复刻'],
  ['Starred', '标星'],
  ['Switch branches/tags', '查看所有分支/标签'],
  ['Profile picture', '简介图片'],
  ['SSH and GPG keys', 'SSH和GPG密钥'],
  ['Cancel changes', '取消更改'],
  ['Commit changes...', '提交更改...'],

  // 其他
  ['Actions', '动作'],
  ['Wiki', '维基'],
  ['Copilot', 'Copilot AI助手'],
  ['Reset all', '重置所有'],
  ['Do not share my personal information', '不要分享我的个人信息'],
  ['Manage Cookies', '管理Cookie'],
  ['Accept', '接受'],
  ['Reject', '拒绝'],
  ['Latest changes', '最新变化'],
  ['minutes ago', '分钟前'],
  ['hours ago', '小时前'],
  ['days ago', '天前'],
  ['weeks ago', '周前'],
  ['months ago', '月前'],
  ['years ago', '年前'],
  ['New', '新建'],
  ['Send', '发送'],
  ['Open Copilot…', '打开Copilot...'],
  ['New conversation', '新的对话'],
  ['Conversation options', '对话选项'],
  ['Take conversation toimmersive', '将对话转换为沉浸式'],
  ['Close chat', '关闭聊天'],
  ['Select a repository to get started. Ask questions about your codebase to get answers fast and learn your way around.', '选择一个仓库开始。向你的代码库提出问题，以获得快速回答并了解你的方式。'],
  ['Search repositories to chat about', '搜索存储库进行对话'],
  ['Recent repositories', '最近的存储库'],
  ['General purpose chat', '通用聊天'],
  ['Immersive', '新的页面'],
  ['Open with', '打开'],
  ['Open conversations', '打开对话'],
  ['Models', '模型'],
  ['Preview', '预览'],
  ['uses AI. Check for mistakes.', '使用人工智能检查错误。'],
  ['Topics', '主题'],
  ['Trending', '趋势'],
  ['Collections', '收藏'],
  ['GitHub Sponsors', 'GitHub赞助'],
  ['Trending repositories today', '今天的热门存储库'],
  ['Enhance your workflow with extensions', '通过扩展增强您的工作流程'],
  ['Tools from the community and partners to simplify tasks and automate processes', '社区和合作伙伴提供的工具，简化任务并自动化流程。'],
  ['Listing Type', '列表类型'],
  ['Search for Copilot extensions, apps, actions, and models', '搜索Copilot扩展、应用程序、动作和模型。'],
  ['Featured', '精选'],
  ['Apps', '应用'],
  ['Create a new extension', '创建一个新的扩展'],
  ['All apps', '所有应用'],
  ['AI Assisted', 'AI辅助'],
  ['API management', 'API管理'],
  ['Backup Utilities', '备份实用程序'],
  ['Chat', '聊天'],
  ['Code quality', '代码质量'],
  ['Code review', '代码审查'],
  ['Code Scanning Ready', '代码扫描就绪'],
  ['Code search', '代码搜索'],
  ['Container CI', '容器CI'],
  ['Dependency management', '依赖管理'],
  ['Deployment Protection Rules', '部署保护规则'],
  ['Desktop tools', '桌面工具'],
  ['Game CI', '游戏CI'],
  ['IDEs', 'IDE'],
  ['Learning', '学习'],
  ['Localization', '本地化'],
  ['Mobile', '移动'],
  ['Mobile CI', '移动CI'],
  ['Monitoring', '监控'],
  ['Open Source management', '开源管理'],
  ['Project management', '项目管理'],
  ['Publishing', '发布'],
  ['Recently added', '最近添加'],
  ['Support', '支持'],
  ['Testing', '测试'],
  ['Time tracking', '时间跟踪'],
  ['Utilities', '实用程序'],
  ['All actions', '所有动作'],
  ['Models for your every use case', '为您的每个用例提供模型'],
  ['Try, test, and deploy from a wide range of model types, sizes, and specializations.', '尝试、测试和部署从广泛的模型类型、大小和专业领域中。'],
  ['Discover apps with Copilot extensions', '发现带有Copilot扩展的应用程序'],
  ['Your favorite tools now work with GitHub Copilot.', '你的最喜爱的工具现在可以与GitHub Copilot一起工作。'],
  ['Recommended', '推荐'],
  ['Install Copilot in your favorite code editor.', '在您最喜欢的代码编辑器中安装Copilot。'],
  ['Copilot is available for a multitude of editors to fit your needs.', 'Copilot适用于多种编辑器以适应您的需求。'],
  ['Add attachment', '添加附件'],
  ['Send now', '立即发送'],
  ['Menu', '菜单'],
  ['Prompts', '提示'],
  ['Personal instructions', '个人说明'],
  ['Good response', '好评'],
  ['Bad response', '差评'],
  ['Copy to clipboard', '复制到剪贴板'],
  ['Retry', '重试'],
  ['Copilot was interrupted before it could finish this message.', 'Copilot在完成此消息之前被中断。'],
  ['Set up Copilot to align with your workflows and preferences. These instructions will only impact your personal conversation.', '设置Copilot以与您的工作流程和首选项对齐。这些指令只会影响您的个人对话。'],
  ['Your instructions', '你的指令'],
  ['characters', '字符上限'],
  ['Open panel', '打开面板'],
  ['View files directly within Copilot', '在Copilot中直接查看文件'],
  ['Ask to generate a file or app, or use the button below to try it yourself.', '要求生成文件或应用程序，或使用下面的按钮尝试一下。'],
  ['I’m feeling lucky', '随机发送'],
  ['Create new...', '创建新的...'],
  ['Your issues', '你的问题'],
  ['Your pull requests', '你的合并请求'],
  ['You have no unread notifications', '你没有未读的通知'],
  ['Owners', '所有者'],
  ['Jump to', '跳转到'],
  ['Chat with Copilot', '与Copilot聊天'],
  ['Start a new Copilot thread', '开始一个新的Copilot线程'],
  ['Search syntax tips', '搜索语法提示'],
  ['Give feedback', '给予反馈'],
  ['Use tools of the trade', '使用行业标准工具'],
  ['Manage projects for developers', '管理开发者项目'],
  ['Start using project tables', '开始使用项目表'],
  ['to create issues, break them into tasks, track relationships, and add custom fields.', '创建问题，将它们分解为任务，跟踪关系，并添加自定义字段。'],
  ['Get started on GitHub', '开始使用Github'],
  ['Follow this exercise to try the GitHub flow', '跟随这个练习来尝试GitHub流程。'], 
  ['GitHub\'s “Hello World” tutorial teaches you essentials, where you create your own repository and learn GitHub\'s pull request workflow for creating and reviewing code.', 'GitHub的“Hello World”教程教你基础知识，你可以创建自己的存储库并学习GitHub的拉取请求工作流程来创建和审查代码。'],
  ['Try the GitHub flow', '尝试GitHub流程'],
  ['Learn with a tutorial project', '用教程项目学习'],
  ['Write code in your web browser', '在Web浏览器中编写代码'],
  ['Use', '使用'],
  ['the github.dev web-based editor', '基于github.dev的Web编辑器'],
  ['from your repository or pull request to create and commit changes.', '从你的存储库或拉取请求中创建和提交更改。'],
  ['Remove from dashboard', '从仪表盘中移除'],
  ['Start writing code', '开始编写代码'],
  ['A repository contains all of your project\'s files, revision history, and collaborator discussion.', '存储库包含您项目的所有文件、修订历史和协作讨论。'],
  ['You\'re seeing this because you haven\'t used repositories, issues, and pull requests recently.', '你看到这个是因为你最近没有使用过存储库、问题和合并请求。'],
  ['Ask Copilot', '询问Copilot'],
  ['name your new repository...', '给你的新仓库起个名字...'],
  ['Explore repositories', '探索存储库'],
  ['Explore more →', '探索更多 →'],
  ['Set status', '设置状态'],
  ['No packages published', '没有发布任何软件包'],
  ['Blog', '博客'],
  ['Shop', '商店'],
  ['Contact GitHub', '联系 Github'],
  ['Pricing', '定价'],
  ['Training', '培训'],
  ['Status', '状态'],
  ['Terms', '条款'],
  ['Privacy', '隐私'],
  ['Docs', '文档']
];

const MutationObserverConfig = {
  childList: true,
  subtree: true,
  attributeFilter: ["data-label"],
  characterData: true,
};

const dataMap = new Map();
allData.forEach(([key, val]) => {
  if (key && !dataMap.has(key)) {
    dataMap.set(key, val);
  }
});

// 缓存已经处理过的节点
const processedNodes = new Set();

const observer = new MutationObserver(function (mutations) {
  const treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ALL,
    {
      acceptNode: function (node) {
        if (
          node.nodeType === 3 ||
          (node.hasAttribute &&
            (node.hasAttribute("data-label") ||
              node.hasAttribute("placeholder") ||
              node.hasAttribute("value")))
        ) {
          return NodeFilter.FILTER_ACCEPT;
        } else {
          return NodeFilter.FILTER_SKIP;
        }
      },
    },
    false
  );

  const nodesToProcess = [];
  let currentNode = treeWalker.currentNode;
  while (currentNode) {
    if (!processedNodes.has(currentNode)) {
      nodesToProcess.push(currentNode);
      processedNodes.add(currentNode);
    }
    currentNode = treeWalker.nextNode();
  }

  // 分批处理节点
  function processNodesInBatch() {
    if (nodesToProcess.length === 0) return;

    const batchSize = 10;
    const batch = nodesToProcess.splice(0, batchSize);

    batch.forEach((node) => {
      if (node.nodeType === 3) {
        let key1 = node.textContent
          .replace(/^\s*|\s*$/g, "")
          .replace(/\s+/g, " ");
        if (dataMap.has(key1)) node.textContent = dataMap.get(key1);
      } else {
        let key2 = node.getAttribute("data-label");
        if (key2 && dataMap.has(key2))
          node.setAttribute("data-label", dataMap.get(key2));
        let key3 = node.getAttribute("placeholder") || "";
        if ((key3 = key3.trim())) {
          if (dataMap.has(key3))
            node.setAttribute("placeholder", dataMap.get(key3));
        }
        let key4 = node.getAttribute("value");
        if (node.tagName == "INPUT" && dataMap.has(key4)) {
          node.setAttribute("value", dataMap.get(key4));
          let key5 = node.getAttribute("data-signin-label");
          let key6 = node.getAttribute("data-disable-with");
          node.setAttribute("data-signin-label", dataMap.get(key5));
          node.setAttribute("data-disable-with", dataMap.get(key6));
        }
      }
    });

    requestIdleCallback(processNodesInBatch);
  }

  requestIdleCallback(processNodesInBatch);
});

observer.observe(document.body, MutationObserverConfig);