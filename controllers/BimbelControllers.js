const { bimbel } = require("../models");

exports.getAllBimbel = async (req, res) => {
  try {
    const listBimbel = await bimbel.findAll({
      attributes: [
        "id",
        "nama",
        "url_location",
        "phone",
        "jam_buka",
        "hari_buka",
        "url_pic",
        "kecamatan",
        "website",
        "alamat",
      ],
    });
    res.status(200).json({
      success: true,
      message: "List All Bimbels",
      data: listBimbel,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getBimbelByKecamatan = async (req, res) => {
  const { kecamatan } = req.params;
  try {
    const listBimbel = await bimbel.findAll({
      attributes: [
        "id",
        "nama",
        "url_location",
        "phone",
        "jam_buka",
        "hari_buka",
        "url_pic",
        "kecamatan",
        "website",
        "alamat",
      ],
      where: {
        kecamatan: kecamatan,
      },
    });
    res.status(200).json({
      success: true,
      message: "Selected bimbels",
      data: listBimbel,
    });
  } catch (error) {
    console.log(error);
  }
};

// create
exports.createBimbel = async (req, res) => {
  const {nama, url_location, phone, jam_buka, hari_buka, url_pic, kecamatan, website, alamat} = req.body;

  try {
    let dataBimbel = await bimbel.create({
      nama: nama,
      url_location: url_location,
      phone: phone,
      jam_buka: jam_buka,
      hari_buka: hari_buka,
      url_pic: url_pic,
      kecamatan: kecamatan,
      website: website,
      alamat: alamat,
    });

    dataBimbel = JSON.parse(JSON.stringify(dataBimbel))

    return res.status(200).json({
      success: true,
      message: 'Create Successfully',
    });
  } catch (error) {
    console.log(error)
  }
}
// update
exports.updateBimbel = async (req, res) => {
  const {nama, url_location, phone, jam_buka, hari_buka, url_pic, kecamatan, website, alamat} = req.body;
  const {id} = req.params
  try {
    let dataBimbel = await bimbel.update({
      nama: nama,
      url_location: url_location,
      phone: phone,
      jam_buka: jam_buka,
      hari_buka: hari_buka,
      url_pic: url_pic,
      kecamatan: kecamatan,
      website: website,
      alamat: alamat,
    },{
      where: {
        id: id
      }
    });

    dataBimbel = JSON.parse(JSON.stringify(dataBimbel))

    return res.status(200).json({
      success: true,
      message: 'Update Successfully',
    });
  } catch (error) {
    console.log(error)
  }
}
// delete
exports.deleteBimbel = async (req, res) => {
  const {id} = req.params
  try {
    let dataBimbel = await bimbel.destroy({
      where: {
        id: id
      }
    });

    dataBimbel = JSON.parse(JSON.stringify(dataBimbel))

    return res.status(200).json({
      success: true,
      message: 'Delete Successfully',
    });
  } catch (error) {
    console.log(error)
  }
}