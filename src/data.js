const productss =[
    {
      id: 1,
      title: 'کیک مرمر',
      img: 'images/products/marble-cake-thumb.jpg',
      category: 'کیک',
      createDate: '02.04.2018',
      status: 'ON HOLD',
      statusColor: 'primary',
      description: 'کیک عروسی با گل ماکارون و زغال اخته',
      sales: 1647000,
      stock: 62,
      favorite: false,
    },
    {
      id: 2,
      title: 'راسکال چاق',
      category: 'کاپ کیک',
      img: 'images/products/fat-rascal-thumb.jpg',
      createDate: '01.04.2018',
      status: 'PROCESSED',
      statusColor: 'secondary',
      description: 'چیزکیک با کوکی شکلاتی و بیسکویت خامه ای',
      sales: 124000,
      stock: 48,
      favorite: false,
    },
    {
      id: 3,
      title: 'کیک شکلاتی',
      img: 'images/products/chocolate-cake-thumb.jpg',
      category: 'کیک',
      createDate: '25.03.2018',
      status: 'PROCESSED',
      statusColor: 'secondary',
      description: 'چیزکیک خانگی با توت تازه و نعناع',
      sales: 108000,
      stock: 57,
      favorite: false,
    },
    {
      id: 4,
      title: 'سینه غاز',
      img: 'images/products/goose-breast-thumb.jpg',
      category: 'کیک',
      createDate: '21.03.2018',
      status: 'PROCESSED',
      statusColor: 'secondary',
      description: 'کیک شکلاتی با انواع توت ها',
      sales: 1014000,
      stock: 41,
      favorite: false,
    },
    {
      id: 5,
      title: 'پتی گاتو',
      category: 'کاپ کیک',
      img: 'images/products/petit-gateau-thumb.jpg',
      createDate: '02.06.2018',
      status: 'ON HOLD',
      statusColor: 'primary',
      description: 'کیک شکلاتی با ماسکارپونه',
      sales: 98500,
      stock: 23,
      favorite: false,
    },
    {
      id: 6,
      title: 'سالزبرگر نوکرل',
      img: 'images/products/salzburger-nockerl-thumb.jpg',
      category: 'دسر',
      createDate: '14.07.2018',
      status: 'PROCESSED',
      statusColor: 'secondary',
      description: 'کیک عروسی تزئین شده با دونات و توت های وحشی',
      sales: 96200,
      stock: 34,
      favorite: false,
    },
    {
      id: 7,
      title: 'ناپلئونشات',
      img: 'images/products/napoleonshat-thumb.jpg',
      category: 'دسر',
      createDate: '05.02.2018',
      status: 'PROCESSED',
      statusColor: 'secondary',
      description: 'کیک پنیر با توت تازه و نعناع برای دسر',
      sales: 92100,
      stock: 31,
      favorite: false,
    },
    {
      id: 8,
      title: 'چیزکیک',
      img: 'images/products/cheesecake-thumb.jpg',
      category: 'کیک',
      createDate: '18.08.2018',
      status: 'ON HOLD',
      statusColor: 'primary',
      description: 'کیک شکلاتی وگان خوشمزه',
      sales: 88700,
      stock: 21,
      favorite: false,
    },
    {
      id: 9,
      title: 'سرمایه دار',
      img: 'images/products/financier-thumb.jpg',
      category: 'دسر',
      createDate: '15.03.2018',
      status: 'ON HOLD',
      statusColor: 'primary',
      description:'کیک ماست توت فرنگی با شکلات سفید تزئین شده با میوه های تازه و شکلات',
      sales: 865000,
      stock: 53,
      favorite: false,
    },
    {
      id: 10,
      title: 'جنوایز',
      img: 'images/products/genoise-thumb.jpg',
      category: 'کاپ کیک',
      createDate: '11.06.2018',
      status: 'PROCESSED',
      statusColor: 'secondary',
      description: 'کیک میوه کریسمس، پودینگ در بالا',
      sales: 82400,
      stock: 55,
      favorite: false,
    },
    {
      id: 11,
      title: 'نان زنجفیل',
      img: 'images/products/gingerbread-thumb.jpg',
      category: 'کیک',
      createDate: '10.04.2018',
      status: 'ON HOLD',
      statusColor: 'primary',
      description: 'کیک عروسی تزئین شده با دونات و توت های وحشی',
      sales: 71400,
      stock: 12,
      favorite: false,
    },
    {
      id: 12,
      title: 'ماگدالنا',
      img: 'images/products/magdalena-thumb.jpg',
      category: 'کیک',
      createDate: '22.07.2018',
      status: 'PROCESSED',
      statusColor: 'secondary',
      description: 'کیک میوه کریسمس، پودینگ در بالا',
      sales: 70200,
      stock: 14,
      favorite: false,
    },
    {
      id: 13,
      title: 'پارکین',
      img: 'images/products/parkin-thumb.jpg',
      category: 'کیک',
      createDate: '22.08.2018',
      status: 'ON HOLD',
      statusColor: 'primary',
      description:'کیک ماست توت فرنگی با شکلات سفید تزئین شده با میوه های تازه و شکلات',
      sales: 68900,
      stock: 78,
      favorite: false,
    },
    {
      id: 14,
      title: 'استروسلکوخن',
      img: 'images/products/streuselkuchen-thumb.jpg',
      category: 'کیک',
      createDate: '22.07.2018',
      status: 'PROCESSED',
      statusColor: 'secondary',
      description: 'کیک شکلاتی وگان خوشمزه',
      sales: 64500,
      stock: 55,
      favorite: false,
    },
    {
      id: 15,
      title: 'قرص چای',
      img: 'images/products/tea-loaf-thumb.jpg',
      category: 'کیک',
      createDate: '10.09.2018',
      status: 'ON HOLD',
      statusColor: 'primary',
      description: 'کیک پنیر با توت تازه و نعناع برای دسر',
      sales: 632000,
      stock: 20,
      favorite: false,
    },
    {
      id: 16,
      title: 'مرویو',
      img: 'images/products/merveilleux-thumb.jpg',
      category: 'کیک',
      createDate: '18.02.2018',
      status: 'ON HOLD',
      statusColor: 'primary',
      description: 'کیک شکلاتی با ماسکارپونه',
      sales: 62100,
      stock: 6,
      favorite: false,
    },
    {
      id: 17,
      title: 'کیک میوه',
      img: 'images/products/fruitcake-thumb.jpg',
      category: 'کیک',
      createDate: '12.01.2019',
      status: 'PROCESSED',
      statusColor: 'secondary',
      description: 'کیک شکلاتی با انواع توت ها',
      sales: 595000,
      stock: 17,
      favorite: false,
    },
    {
      id: 18,
      title: 'ببینکا',
      img: 'images/products/bebinca-thumb.jpg',
      category: 'کیک',
      createDate: '04.02.2019',
      status: 'PROCESSED',
      statusColor: 'secondary',
      description: 'چیزکیک خانگی با توت تازه و نعناع',
      sales: 57400,
      stock: 16,
      favorite: false,
    },
    {
      id: 19,
      title: 'کرم شنیت',
      img: 'images/products/cremeschnitte-thumb.jpg',
      category: 'دسر',
      createDate: '04.03.2018',
      status: 'ON HOLD',
      statusColor: 'primary',
      description: 'چیزکیک با کوکی شکلاتی و بیسکویت خامه ای',
      sales: 56200,
      stock: 9,
      favorite: false,
    },
    {
      id: 20,
      title: 'سوفله',
      img: 'images/products/souffle-thumb.jpg',
      category: 'کاپ کیک',
      createDate: '16.01.2018',
      status: 'ON HOLD',
      statusColor: 'primary',
      description: 'کیک عروسی با گل ماکارون و زغال اخته',
      sales: 52400,
      stock: 14,
      favorite: false,
    },
    
  ];
  
  export default productss;
  