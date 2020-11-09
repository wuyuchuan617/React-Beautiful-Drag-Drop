const db = require('./db_connect2');

module.exports = async function App(context) {
  // await context.sendText('Welcome to Chedemy');
  // if (context.event.isText) {
  //   await context.sendText(context.event.text);
  // }
  if (context.event.isText) {
    // -------------------------以下為詢價客服-----------------------

    console.log(context.event);

    // 判斷詢價
    let step = '';
    if (context.event.text == '價格') {
      step = context.event.text;
      console.log('step1' + step);
      await context.sendText('請輸入商品代號');
    } else {
      await context.sendText('您是想問價格嗎？');
    }

    // 判斷輸入字串是否為數字

    if (/^\d+$/.test(context.event.text)) {
      console.log('step3' + step);
      const sql = `SELECT * FROM w_product_mainlist WHERE sid= '${context.event.text}' `;
      const [[row]] = await db.query(sql);
      console.log(row);
      let msg = `產品名稱:${row.price}  `;
      await context.sendText(msg);
    }
  }

  // -------------------------以下為訂單客服-----------------------

  if (context.event.text == '訂單') {
    await context.sendText('請輸入訂單編號');
  }
  if (~context.event.text.indexOf('PO')) {
    let order_no = context.event.text;
    const sql = `SELECT * FROM J_cart_order WHERE PO_NO= '${order_no}' `;

    const [[row]] = await db.query(sql);
    console.log(row);

    let status = '';
    if (row.order_status == 1) status = '未處理';
    if (row.order_status == 2) status = '處理中';
    if (row.order_status == 3) status = '結案';
    if (row.order_status == 4) status = '撤銷';
    let msg = ` 訂單狀況:${status} `;
    await context.sendText(msg);
  }

  // 測試回傳圖片
  if (context.event.text == 'hello') {
    await context.replyImage({
      originalContentUrl: 'https://qr-official.line.me/sid/L/228pzxci.png',
      previewImageUrl: 'https://qr-official.line.me/sid/L/228pzxci.png',
    });
  }

  // 測試回傳影片
  if (context.event.text == 'video') {
    await context.replyVideo({
      originalContentUrl:
        'http://localhost:3000/static/media/Circle-Chair-Final.ec3d3fdc.mp4',
      previewImageUrl:
        'http://localhost:3000/static/media/Circle-Chair-Final.ec3d3fdc.mp4',
    });
  }

  // 測試回傳貼圖
  if (context.event.text == '貼圖') {
    await context.replySticker({ packageId: '1', stickerId: '1' });
  }

  // 測試Template Messages
  if (context.event.text == '模板') {
    await context.replyTemplate('this is a template', {
      type: 'buttons',
      thumbnailImageUrl: 'https://example.com/bot/images/image.jpg',
      title: 'Menu',
      text: 'Please select',
      actions: [
        {
          type: 'postback',
          label: 'Buy',
          data: 'action=buy&itemid=123',
        },
        {
          type: 'postback',
          label: 'Add to cart',
          data: 'action=add&itemid=123',
        },
        {
          type: 'uri',
          label: 'View detail',
          uri: 'http://192.168.22.177:3000',
        },
      ],
    });
  }

  // 測試replyConfirmTemplate(
  if (context.event.text == '是否') {
    await context.replyConfirmTemplate('this is a confirm template', {
      text: '這次客服是否解決您的問題?',
      actions: [
        {
          type: 'message',
          label: 'Yes',
          text: 'yes',
        },
        {
          type: 'message',
          label: 'No',
          text: 'no',
        },
      ],
    });
  }

  // 測試輪播
  if (context.event.text == '輪播') {
    await context.replyCarouselTemplate('this is a carousel template', [
      {
        thumbnailImageUrl: 'https://example.com/bot/images/item1.jpg',
        title: 'this is menu',
        text: 'description',
        actions: [
          {
            type: 'postback',
            label: 'Buy',
            data: 'action=buy&itemid=111',
          },
          {
            type: 'postback',
            label: 'Add to cart',
            data: 'action=add&itemid=111',
          },
          {
            type: 'uri',
            label: 'View detail',
            uri: 'http://example.com/page/111',
          },
        ],
      },
      {
        thumbnailImageUrl: 'https://example.com/bot/images/item2.jpg',
        title: 'this is menu',
        text: 'description',
        actions: [
          {
            type: 'postback',
            label: 'Buy',
            data: 'action=buy&itemid=222',
          },
          {
            type: 'postback',
            label: 'Add to cart',
            data: 'action=add&itemid=222',
          },
          {
            type: 'uri',
            label: 'View detail',
            uri: 'http://example.com/page/222',
          },
        ],
      },
    ]);
  }
};
