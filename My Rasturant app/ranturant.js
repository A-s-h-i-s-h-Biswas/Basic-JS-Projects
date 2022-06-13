const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 450,
      img: "./img/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 720,
      img: "./img/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 350,
      img: "./img/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 259,
      img: "./img/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 815,
      img: "./img/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 320,
      img: "./img/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 199,
      img: "./img/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 1025,
      img: "./img/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 310,
      img: "./img/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 890,
      img: "./img/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  const main=document.querySelector(".main");
  const btns=document.querySelector(".btns");


  window.addEventListener("DOMContentLoaded",function(){
    display(menu);
    display_bttns();
  });

  function display(list){
      let d_item=list.map(function(item){
          return `<article class="content">
          <div class="photo">
              <img 
            src=${item.img}
            alt=${item.title}
          />
          </div>
          <div class="info">
            <header>
              <h4>${item.title}</h4>
              <p class="pr"><span>Rs.${item.price}</span>/- Only</p>
            </header>
            <p class="text">
              ${item.desc}
            </p>
          </div>
        </article>`;
      }).join("");
      main.innerHTML=d_item;
  }
  function display_bttns(){
      const bt_list=menu.reduce(function(val,itm){
            if(!val.includes(itm.category))val.push(itm.category);
            return val;
      },["all"]);
      const unk_btns=bt_list.map(function( b){
            return `<div class="btns">
            <button  data-id=${b} class="btn ${b}">${b}</button>
          </div>`
      }).join("");
      btns.innerHTML=unk_btns;

      const fltr_bttn=btns.querySelectorAll(".btn");
      fltr_bttn.forEach(function(bt){
      bt.addEventListener("click",function(e){
          const f_iteam=e.currentTarget.dataset.id;
          const f_list=menu.filter(function(a){
              if(a.category==f_iteam)return a;
          });
          if(f_iteam=="all")display(menu);
          else display(f_list);
      });
  });
  }
  
  