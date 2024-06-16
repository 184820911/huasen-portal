/*
 * @Autor: huasenjio
 * @Date: 2022-10-22 10:49:51
 * @LastEditors: huasenjio
 * @LastEditTime: 2023-04-29 17:56:13
 * @Description: 文章接口地址
 */

import Mock from 'mockjs2';
import { get, post } from '../request.js';

// 获取全部文章
const findArticleByCode = post(
  '/article/findByCode',
  [
    {
      time: '1970-01-01',
      content: '内容内容内容',
      bannerImg: 'https://s2.loli.net/2022/11/05/QKCF9zH3dfEXY7B.png',
      isDraft: false,
      _id: '63665c364c82f5001e7bf85a',
      manageId: '184820911@qq.com',
      title: '演示文档',
      tag: '测试/内容/文档',
      code: 0,
      __v: 0,
    },
  ],
  true,
);

// 根据id查询文章
const getArtcileById = get(
  '/article/findById',
  [
    {
      time: '1970-01-01',
      content: "# 不负相遇\n\n> Ctrl + D 收藏本站\n\n```javascript\n你好 - 普通话\nmwngz ndei - 壮语\nhello - 英语\nconsole.log('你好') - Javascript\n```\n\n## 🎈 初衷\n\n深知如今使用百度引擎获取优质的内容困难性，祸源在于是百度搜索存在严重的**竞价排名**的现象，花钱就能让我的内容排名靠前，如此，你可能错过靠后的优质资源，甚至你会搜索到大量的**伪劣内容以及捆绑软件**。好巧不巧，小生喜欢收集实用的资源站点，涵盖了生活、娱乐、学习、影视、考研、工作、科技、等诸多领域。于是花森酱网址导航孕育而生，发现并分享优质的内容，愿大家在繁杂喧闹的互联网信息时代，舒适愉快地上网冲浪！\n\n## 🌿 心境\n\n> 森林覆盖的岛屿花开遍地美好都将与约而至\n\n从大三决然的跳入前端大坑，到如今已是毕业近三年的杭州社畜。脑子依旧清晰地记得，我选择前端时的孤独，周围都是清一色的后端方向，图书馆里我与灯为伴，以书为友，只道是不悔梦归处，空恨时间太匆匆。花森酱主页已运营三年有余，不长不短，**念念不忘，必有回响**。\n\n## ❌ 免责声明\n\n1. 本站严格遵守中华人民共和国相关法律，收录数据均来源于免费论坛社区，不存在破解、串改、售卖等违法行为，违反者造成损失及法律责任与本人无关；\n2. 全站代码开源免费，仅供大家学习参考，未经授权，请勿用于商业用途；\n3. 如有疏忽大意，不幸侵犯到您的权益，烦请联系小生，我们全力配合整改；\n\n## 🥳 联系我们\n\n企鹅 🐧：184820911\n\n邮箱 📮：184820911@qq.com\n\nWeChat：huasencc\n\n### 媒体矩阵\n\n哔哩哔哩：[花森酱的空间](https://space.bilibili.com/241546158)\n\n### 打赏\n\n> 行好事要留名，烦请联系我们，非常感谢您的爱心捐赠！\n\n如果网站帮助到大家，可以为我的 bilibili 视频，送上免费的点赞和硬币。另外，阔绰的小伙伴可以请我喝一杯蜜雪冰城🥤～\n\n![收款码二合一](http://n.huasenjio.top/huasen-store/default/1711470321830.png)\n",
      bannerImg: 'https://s2.loli.net/2022/11/05/QKCF9zH3dfEXY7B.png',
      isDraft: false,
      _id: '63665c364c82f5001e7bf85a',
      manageId: '184820911@qq.com',
      title: '演示文档',
      tag: '测试/内容/文档',
      code: 0,
      __v: 0,
    },
  ],
  true,
);

export default {
  findArticleByCode,
  getArtcileById,
};
