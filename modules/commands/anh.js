module.exports.config = {
 name: "anh",
 version: "1.0.3",
 hasPermssion: 0,
 credits: "Tobi",
 description: "Xem ảnh theo yêu cầu của bạn!",
 usages: "phản hồi 1/2/3",
 commandCategory: "Người dùng",
 cooldowns: 5,
 dependencies: {
  axios: ""
 }
}, module.exports.run = async function({
 event: e,
 api: a,
 args: n
}) {
 if (!n[0]) return a.sendMessage("┏━━━━━━━━━━━━━━━┓\n             [ ảnh và hình ]\n┗━━━━━━━━━━━━━━━┛\n┏━━━━━━━━━━━━━━━┓\n1┣➤ Ảnh Gái\n2┣➤ Ảnh Trai\n3┣➤ ẢNH Anime\n4┣➤ Ảnh Cosplay\n5┣➤ Ảnh Mông\n6┣➤ Ảnh Dú\n┗━━━━━━━━━━━━━━━┛\n┏━━━━━━━━━━━━━━━┓\n             [ video ]\n┗━━━━━━━━━━━━━━━┛\n┏━━━━━━━━━━━━━━━┓\n7┣➤ Video Anime\n8┣➤ Video Gái\n9┣➤ Video Chill\n┗━━━━━━━━━━━━━━━┛\n=> Phản hồi theo số thứ tự để xem ảnh\n=> Phí xem mỗi hình ảnh là 100$!", e.threadID, ((a, n) => {
  global.client.handleReply.push({
   name: this.config.name,
   messageID: n.messageID,
   author: e.senderID,
   type: "create"
  })
 }), e.messageID)
}, module.exports.handleReply = async ({
 api: e,
 event: a,
 client: n,
 handleReply: t,
 Currencies: s,
 Users: i,
 Threads: o,Currencies,
}) => {
    let $ = 100;
    let money = (await Currencies.getData(a.senderID)).money;
    if(money < $)return e.sendMessage(` Cần ${$}$ để xem ảnh`, a.threadID);
    Currencies.decreaseMoney(a.senderID, $);
 var { p, h } = linkanh();

 if ("create" === t.type) {
  const n = (await p.get(h)).data.data;
  let t = (await p.get(n, {
   responseType: "stream"
  })).data;
  if (['10', '11'].includes(a.body))t.path = 'tmp.mp3';
  return e.sendMessage({
   body: "[ NGHIỆN ÍT THÔI ]\n[ BẠN ĐÃ MẤt 100₫ ]",
   attachment: t
  }, a.threadID, a.messageID)
 }

   function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
          var h = "https://quoc-vong-1.hehehehe001.repl.co/api/gai.php";
      else if ("2" == a.body)
         var h = "https://quoc-vong-1.hehehehe001.repl.co/api/boy.php";
      else if ("3" == a.body)
         var h = "https://apitobi.vipcc.repl.co/api/anime.php";
      else if ("4" == a.body)
          var h = "https://apitobi.vipcc.repl.co/api/cosplay.php";
      else if ("5" == a.body)
          var h = "https://apitobi.vipcc.repl.co/api/mong.php";
      else if ("6" == a.body)
          var h = "https://apitobi.vipcc.repl.co/api/du.php";
     else if ("7" == a.body)
          var h = "https://apitobi.vipcc.repl.co/api/videoanime.php";
     else if ("8" == a.body)
          var h = "https://apitobi.vipcc.repl.co/api/videogai.php";
     else if ("9" == a.body)
          var h = "https://apitobi.vipcc.repl.co/api/videochill.php";
        return { p, h };
    }
};
