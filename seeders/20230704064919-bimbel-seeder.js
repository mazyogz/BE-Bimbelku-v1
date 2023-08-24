'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bimbels', [
      {
        nama: 'Lembaga Bimbingan Belajar SONIC CLASS',
        url_location: 'https://goo.gl/maps/dtLK4mjM83zsxktM6',
        phone: '087859170206',
        jam_buka: '-',
        hari_buka: '-',
        url_pic: 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=T2VkW4WrkWTGEXlcKKTqVg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=189.1921&pitch=0&thumbfov=100',
        kecamatan: 'Sukun',
        website: 'http://sonicclass.blogspot.com/',
        alamat: 'Perumahan Taman Janti Blok H No.3, Sukun, Gadang, Kec. Sukun, Kota Malang, Jawa Timur 65149',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Bimbel Faeyza',
        url_location: 'https://goo.gl/maps/x8AogG7EDEed8UeNA',
        phone: '0895620277277',
        jam_buka: '11.00',
        hari_buka: '21.00',
        url_pic: 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=8QtSE3xQEFMc9tB3SQFmXA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=59.846138&pitch=0&thumbfov=100',
        kecamatan: 'Sukun',
        website: '-',
        alamat: 'Perumahan sukun pondok indah Blk. I No.8, Bandungrejosari, Kec. Sukun, Kota Malang, Jawa Timur 65147',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'BIMBEL STAN INFINITY MALANG',
        url_location: 'https://goo.gl/maps/XC7kFNJQfArSoWc99',
        phone: '081914862839',
        jam_buka: '-',
        hari_buka: '-',
        url_pic: 'https://lh5.googleusercontent.com/p/AF1QipPInVFTdEjA-uFEmjocA9gQVeJQgAsfW27mc8a8=w408-h272-k-no',
        kecamatan: 'Klojen',
        website: '-',
        alamat: 'Jl. Tugu, Oro-oro Dowo, Kec. Klojen, Kota Malang, Jawa Timur 65119',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Bimbel SOLUSI',
        url_location: 'https://goo.gl/maps/34WPRtLWbzv44HXB8',
        phone: '081703377475',
        jam_buka: '16.30',
        hari_buka: '18.00',
        url_pic: 'https://lh5.googleusercontent.com/p/AF1QipN68n-xhCWkQSrKaH1WxM8hU2KdJBr3oybglNU9=w426-h240-k-no',
        kecamatan: 'Klojen',
        website: '-',
        alamat: 'Jl. Kurinci No.16, Oro-oro Dowo, Kec. Klojen, Kota Malang, Jawa Timur 65119',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'BIMBEL KEDOKTERAN UMM',
        url_location: 'https://goo.gl/maps/EBPMNt1R8LmJawuaA',
        phone: '03414372869',
        jam_buka: '07.30',
        hari_buka: '21.00',
        url_pic: 'https://lh5.googleusercontent.com/p/AF1QipMQxKAraYjpPdxBysTAIX5ydbWZ08zyHY-n4TIj=w427-h240-k-no',
        kecamatan: 'Blimbing',
        website: 'http://www.globalexcellencekedokteran.com/',
        alamat: 'Jl. Citandui No.19, Purwantoro, Kec. Blimbing, Kota Malang, Jawa Timur 65126',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Bimbel & Motivasi BRAWIJAYA Sawojajar',
        url_location: 'https://goo.gl/maps/QYGJfkSkEgkLQMbn9',
        phone: 'Tidak Tersedia',
        jam_buka: '-',
        hari_buka: '-',
        url_pic: 'https://lh5.googleusercontent.com/p/AF1QipOygiRgqm6r58_LhH3BA-ByG-UX8796mTckDpKi=w408-h305-k-no',
        kecamatan: 'Kedungkandang',
        website: 'http://www.bimbelbrawijaya.com/',
        alamat: 'Jl. Danau Kerinci Raya, Sawojajar, Kec. Kedungkandang, Kota Malang, Jawa Timur 65139',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Bimbel Pintara Indonesia',
        url_location: 'https://goo.gl/maps/To9vAL7QT8auJ5sx7',
        phone: '085790361054',
        jam_buka: '12.00',
        hari_buka: '19.00',
        url_pic: 'https://lh5.googleusercontent.com/p/AF1QipMTM-F5kS3B9hrgnWHW1Et8IXqMSIxKw3FJEXDM=w408-h725-k-no',
        kecamatan: 'Lowokwaru',
        website: 'http://www.pintaraindonesia.com/',
        alamat: 'Jl Soekarno Hatta Ruko, Jl. Bunga Andong Sel. No.17A, Kota Malang, Jawa Timur 65141',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'BIC - Brawijaya Intensive Centre',
        url_location: 'https://goo.gl/maps/6cwVW7FRQw663jJr6',
        phone: '0811300200',
        jam_buka: '08.00',
        hari_buka: '20.00',
        url_pic: 'https://lh5.googleusercontent.com/p/AF1QipOEHXIrVbs8NySEa1GRu1k2I6M1QF2_fxgwKyk-=w426-h240-k-no',
        kecamatan: 'Lowokwaru',
        website: 'https://bic.id/link?utm_source=gmb&utm_medium=Link&utm_campaign=website_klik',
        alamat: 'Perum Griya Shanta, Jl. Soekarno - Hatta No.320, Mojolangu, Lowokwaru, Malang City, East Java 65141',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bimbels', null, {});
  }
};
