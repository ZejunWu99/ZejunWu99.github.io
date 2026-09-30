# Zejun Wu personal website

纯静态个人学术主页，可直接部署到 GitHub Pages。无第三方 npm 依赖。

## 预览

在当前目录运行 `npm.cmd start`，访问 http://127.0.0.1:4173 。Windows PowerShell 使用 `npm.cmd` 可避免 npm.ps1 执行策略限制，无需修改系统设置。
也可直接打开 `index.html` 查看开屏，或打开 `home.html` 查看首页。

## 修改

- `site-data.js`：姓名、机构、简介、社交链接、论文资料。
- `scripts/build.mjs`：页面模板、占位内容、原创 SVG 插画。
- `styles.css`：配色、版式、响应式和动画。
- `app.js`：移动导航、论文筛选、动画暂停、CV 打印。
- `avatar.jpg`：用户提供的头像，保留原文件。

修改数据或模板后运行 `npm.cmd run build`；运行 `npm.cmd run check` 检查页面和本地资源链接。
生成的 HTML 直接提交即可，GitHub Pages 无需运行构建。

## 资料与占位

已根据用户提供的 Google Scholar 页面核实机构、三个研究兴趣、两篇期刊文章和一条会议摘要（2026-09-30）。
来源：https://scholar.google.com/citations?hl=en&user=0g9DJbAAAAAJ

LinkedIn 链接由用户提供；公开页面无法读取，因此未从中推测职位和教育经历。
来源：https://www.linkedin.com/in/zejun-wu-594844271/

待补充：姓名正式写法、职位/学位阶段、部门及导师、详细简介、联系邮箱、CV、媒体报道、研究产品、博客。
所有未确认的经历及尚未提供的内容都明确标注为占位。CV 的打印结果是草稿，不是正式简历。
森林开屏与其他占位图为本项目原创 SVG，使用 CSS 缓慢移动；不是参考网站的视频素材。
外部字体不可用时自动使用系统字体。减少动态效果的系统设置会停用动画。

## 本地 Git 和发布

目前制作网站不需要修改任何 Git 配置。需要版本管理时，在此目录执行：

```powershell
git init -b main
# 仅当需要不同的提交身份时，设置本仓库的身份（填写实际提交者）：
git config --local user.name "实际提交者姓名"
git config --local user.email "实际提交者邮箱或 GitHub noreply 邮箱"
git add .
git commit -m "Create personal academic website"
git remote add origin https://github.com/ZejunWu99/ZejunWu99.github.io.git
git push -u origin main
```

先由她创建 `ZejunWu99.github.io` 空仓库并邀请你的 GitHub 账号为协作者；使用你自己的账号推送。
不需要切换本地 GitHub 账号，也不需要保存她的密码。提交身份与推送授权互相独立。
在 GitHub 的 Settings → Pages 选择 Deploy from a branch、main、/(root)。
发布地址：https://zejunwu99.github.io/ 。

如果远程仓库已经有内容，先获取并检查已有内容，不要强制推送。

## September 2026 content update

HOME now includes three personal news cards adapted from the PERS Lab news feed. MEDIA includes the same verified fieldwork and award updates. Research and CV now describe canopy structure, airborne LiDAR, TLS, and tropical forest fieldwork. Third-year Ph.D. candidate status was confirmed directly by the user. The lab announcement does not identify Zejun's award by name; it is not labeled as a Jefferson Fellowship.

Sources: https://geoxiyang.github.io/PERS-Website/Lab%20Website.html#people and https://geoxiyang.github.io/PERS-Website/news.json (accessed 2026-09-30). Photos in assets/news-neon.jpg and assets/news-tls.webp originate from the corresponding PERS Lab news entries. The Puerto Rico card plays the lab-hosted video on demand. The TLS photograph shows Bartlett fieldwork, not an award ceremony.
