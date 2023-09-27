module.exports.config = {
 name: "ảnh",
 version: "1.0.3",
 hasPermssion: 0,
 credits: "",
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
 if (!n[0]) return a.sendMessage("┏━━━━━━━━━━━━━━━┓\n             [ ảnh và hình ]\n┗━━━━━━━━━━━━━━━┛\n┏━━━━━━━━━━━━━━━┓\n1┣➤ ẢNH GÁI\n2┣➤ ẢNH MÔNG\n3┣➤ ẢNH TRAI\n4┣➤ ẢNH GÁI NHẬT \n5┣➤ ẢNH SEX\n┗━━━━━━━━━━━━━━━┛\n┏━━━━━━━━━━━━━━━┓\n                 [ VIDEO ]\n┗━━━━━━━━━━━━━━━┛\n6┣➤ VIDEO CHILL\n7┣➤  VIDEO SEX\n8┣➤ VIDEO ANIME\n9┣➤ VIDEO GÁI\n┏━━━━━━━━━━━━━━━┓\n                 VOICE\n┗━━━━━━━━━━━━━━━┛\n┏━━━━━━━━━━━━━━━┓\n10┣➤ VOICE BUỒN\n11┣➤ VOICE HÁT\n┗━━━━━━━━━━━━━━━┛\n=> Phản hồi theo số thứ tự để xem ảnh\n=> Phí xem mỗi hình ảnh là 100$!", e.threadID, ((a, n) => {
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
   body: "[THỨ BẠN CHỌN NÈ]\n[VÀ BẠN ĐÃ MẤt 100₫]",
   attachment: t
  }, a.threadID, a.messageID)
 }

   function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
          var h = "https://api-1.longbui19.repl.co/api1/ap.php";
      else if ("2" == a.body)
         var h = "https://quoc-vong-1.hehehehe001.repl.co/api/mong.php";
      else if ("3" == a.body)
         var h = "https://quoc-vong-1.hehehehe001.repl.co/api/boy.php";
      else if ("4" == a.body)
          var h = "https://quoc-vong-1.hehehehe001.repl.co/api/gainhat.php";
      else if ("5" == a.body)
          var h = "https://api-1.longbui19.repl.co/api1/ap.php";
      else if ("6" == a.body)
          var h = "https://quoc-vong-1.hehehehe001.repl.co/api/videochill.php";
      else if ("7" == a.body)
          var h = "https://api.longbui19.repl.co/api1/ap.php";
      else if ("8" == a.body)
          var h = "https://api-3.longbui19.repl.co/api1/ap.php ";
      else if ("9" == a.body)
          var h = "https://quoc-vong-1.hehehehe001.repl.co/api/videogai.php";
      else if ("10" == a.body)
          var h = "https://quoc-vong-1.hehehehe001.repl.co/api/voicebuon.php";
      else if ("11" == a.body)
          var h = "https://quoc-vong-1.hehehehe001.repl.co/api/voicehat.php";
      else if ("12" == a.body)
          var h = "https://api-trankhuong.trankhuong-tk-jiang-2000.repl.co/images/cosplay";
      else if ("13" == a.body)
          var h = "https://api-trankhuong.trankhuong-tk-jiang-2000.repl.co/images/cosplaylq";
      else if ("14" == a.body)
          var h = "https://api-trankhuong.trankhuong-tk-jiang-2000.repl.co/images/cosplaytc";
      else if ("15" == a.body)
          var h = "https://api-trankhuong.trankhuong-tk-jiang-2000.repl.co/images/skinlq";
      else if ("16" == a.body)
          var h = "https://api-trankhuong.trankhuong-tk-jiang-2000.repl.co/images/skintc";
        return { p, h };
    }
};