const photos = [
    {
        name: 'Luke Skywalker',
        url: 'https://i.pinimg.com/originals/3f/53/2a/3f532a10e7940050addf6b6bdcb16c24.jpg'
    },
    {
        name: 'C-3PO',
        url: 'https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png'
    },
    {
        name: 'R2-D2',
        url: 'https://upload.wikimedia.org/wikipedia/ru/3/39/R2-D2_Droid.png'
    },
    {
        name: 'Darth Vader',
        url: 'https://i.pinimg.com/originals/be/46/ce/be46ce7511072e2eb88dd324590d8af1.png'
    },
    {
        name: 'Leia Organa',
        url: 'https://bakerlady.files.wordpress.com/2010/12/leias-hair.jpg'
    },
    {
        name: 'Owen Lars',
        url: 'http://pm1.narvii.com/6955/8de3ebe4060f25b47bb284ef0708886144d46dd8r1-377-382v2_00.jpg'
    },
    {
        name: 'Beru Whitesun lars',
        url: 'http://pm1.narvii.com/6168/ff4e27ef435e7191ca5429126c31754115a93776_00.jpg'
    },
    {
        name: 'R5-D4',
        url: 'https://www.pikpng.com/pngl/m/249-2495934_category-star-wars-r5-d4-clipart.png'
    },
    {
        name: 'Biggs Darklighter',
        url: 'https://comicvine.gamespot.com/a/uploads/scale_medium/14/145984/4902632-8136336329-biggs.jpg'
    },
    {
        name: 'Obi-Wan Kenobi',
        url: 'https://th.stuklopechat.com/images/iskusstvo-i-razvlecheniya/personazh-zvezdnih-vojn-obi-van-kenobi-akter-kotorij-ego-sigral.jpg'
    },
    {
        name: 'Anakin Skywalker',
        url: 'https://64.media.tumblr.com/4363c4ecfa8ea4ed2a62fcec13ba8a83/tumblr_o49jq0k8zb1sl2jkoo7_1280.jpg'
    },
    {
        name: 'Wilhuff Tarkin',
        url: 'https://data.cyclowiki.org/images/e/e2/Tarkin.jpg'
    },
    {
        name: 'Chewbacca',
        url: 'https://i.pinimg.com/originals/72/6f/66/726f669d0a670e4d24095cda8a7d31ee.jpg'
    },
    {
        name: 'Han Solo',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjpl-1UrGLiPz08uWkvB5W-a6x1ul89d3ui4clJN1KuEDvmZE5mSLyXnrCB9ktCfKyuF0&usqp=CAU'
    },
    {
        name: 'Greedo',
        url: 'https://pyxis.nymag.com/v1/imgs/c20/4ac/55db7c77cf4a0ed214af58f3201f5281bf-12-greedo-star-wars.rsquare.w330.jpg'
    },
    {
        name: 'Jabba Desilijic Tiure',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcKcFINgDA33l3GjQ2u8g6Wj2tkKoTaYqkTj31vz4vxqD7xQS1NfzYvpJuy0iwaHnBhuw&usqp=CAU'
    },
    {
        name: 'Wedge Antilles',
        url: 'https://upload.wikimedia.org/wikipedia/en/4/41/Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg'
    },
    {
        name: 'Jek Tono Porkins',
        url: 'https://external-preview.redd.it/bC4_FyDoMhIcN-kKrvPS69Djq46dDK05VaG5DFLx42U.jpg?width=640&crop=smart&auto=webp&s=412a96d7c00f2f88f224be1581fcfee0bacc1a45'
    },
    {
        name: 'Yoda',
        url: 'https://free-png.ru/wp-content/uploads/2022/01/free-png.ru-426.png'
    },
    {
        name: 'Palpatine',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP7u4oVqUwQVALqdjkfe4RLDyABbOLVYn2log_7pf0jUebHFAmHpvXiFZxPtj_Yr_gfNw&usqp=CAU'
    },
    {
        name: 'Boba Fett',
        url: 'https://static.posters.cz/image/1300/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/star-wars-the-mandalorian-boba-fett-i114153.jpg'
    },
    {
        name: 'IG-88',
        url: 'https://wiki.swgoh.help/images/5/51/Unit-Character-IG-88.png'
    },
    {
        name: 'Bossk',
        url: 'https://i.pinimg.com/originals/04/9f/b4/049fb433bf08f0d0e71590620d09e28e.jpg'
    },
    {
        name: 'Lando Calrissian',
        url: 'https://bamfstyle.com/wp-content/uploads/2019/05/lando-main1.jpg'
    },
    {
        name: 'Lobot',
        url: 'https://i.pinimg.com/originals/79/15/27/7915279d05c7cfd9e81c999911c93860.jpg'
    },
    {
        name: 'Ackbar',
        url: 'https://upload.wikimedia.org/wikipedia/en/6/6e/AckbarStanding.jpg'
    },
    {
        name: 'Mon Mothma',
        url: 'https://i.pinimg.com/originals/11/84/aa/1184aab2be2f65bd3f82698f99ce7768.jpg'
    },
    {
        name: 'Arvel Crynyd',
        url: 'http://ayay.co.uk/backgrounds/star_wars/rebel_alliance_characters/arvel-crynyd.jpg'
    },
    {
        name: 'Wicket Systri Warrick',
        url: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Wicket_W_Warrick.png'
    },
    {
        name: 'Nien Nunb',
        url: 'https://i.pinimg.com/564x/f6/ed/29/f6ed291201f97bf4d7dafc07e52869ba--aliens-rebel-alliance.jpg'
    },
    {
        name: 'Qui-Gon Jinn',
        url: 'https://starwarskeytojediarchives.weebly.com/uploads/1/1/9/7/11975442/7820228_orig.jpg?175'
    },
    {
        name: 'Nute Gunray',
        url: 'https://i.pinimg.com/550x/57/70/2b/57702b3d418b2c6142f85dbb925e5d9b.jpg'
    },
    {
        name: 'Finis Valorum',
        url: 'https://i.pinimg.com/474x/ac/46/c6/ac46c67619e5681e38376fc246457b75.jpg'
    },
    {
        name: 'Padmé Amidala',
        url: 'https://1.bp.blogspot.com/_n0dOFJIg_vw/SdVD8YU4DlI/AAAAAAAAA54/mOH49sLorA4/s320/P.jpg'
    },
    {
        name: 'Jar Jar Binks',
        url: 'https://i.redd.it/9rq5t1fndxd41.png'
    },
    {
        name: 'Roos Tarpals',
        url: 'https://static1.personality-database.com/profile_images/4f1dd315ef564fa795b4fb59a2339166.png'
    },
    {
        name: 'Rugor Nass',
        url: 'http://1.bp.blogspot.com/-pVoP_s8gUcU/Ub3hWct8LxI/AAAAAAAAASA/oqFRw-CUQ4M/s1600/boss+nass.jpg'
    },
    {
        name: 'Ric Olié',
        url: 'https://starwars.ru/media/cache/26/29/2629be3415bd1f4af8d6d98d251cfc77.png'
    },
    {
        name: 'Watto',
        url: 'https://i.pinimg.com/originals/5a/ad/3a/5aad3a4b1635bab86e0ae06dc4cea3c0.png'
    },
    {
        name: 'Sebulba',
        url: 'https://i.pinimg.com/originals/47/3d/0c/473d0c177001932006bddce5e5030345.png'
    },
    {
        name: 'Quarsh Panaka',
        url: 'https://www.comiccon.cz/news/48.jpg'
    },
    {
        name: 'Shmi Skywalker',
        url: 'https://comicvine.gamespot.com/a/uploads/scale_small/1/10376/225024-19607-shmi-skywalker.jpg'
    },
    {
        name: 'Darth Maul',
        url: 'https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/star-wars-darth-maul-i118607.jpg'
    },
    {
        name: 'Bib Fortuna',
        url: 'https://www.starwars-union.de/bilder/lexikon/20060520bib.jpg'
    },
    {
        name: 'Ayla Secura',
        url: 'https://images.hdqwalls.com/download/aayla-secura-star-wars-4k-v0-800x1280.jpg'
    },
    {
        name: 'Ratts Tyerel',
        url: 'https://www.giantbomb.com/a/uploads/scale_small/1/15405/453921-250px_rattshs.jpg'
    },
    {
        name: 'Dud Bolt',
        url: 'https://live.staticflickr.com/2440/3639076866_283916bf7e_b.jpg'
    },
    {
        name: 'Gasgano',
        url: 'https://galacticfigures.com/images/actionFigures/Episode-1/Episode-1-Gasgano_Small_2.jpg'
    },
    {
        name: 'Ben Quadinaros',
        url: 'https://i.pinimg.com/originals/7a/57/c6/7a57c6d8b9f1e4b0e5ea57631ffc28b3.jpg'
    },
    {
        name: 'Mace Windu',
        url: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Mace_Windu.png'
    },
    {
        name: 'Ki-Adi-Mundi',
        url: 'https://i.pinimg.com/474x/cc/84/4c/cc844c3082c6a2c37b19cb8a5f3b1e54--ki-star-wars.jpg'
    },
    {
        name: 'Kit Fisto',
        url: 'https://i.pinimg.com/originals/1e/29/58/1e29587836f1da66f7c8e9493a2b925e.jpg'
    },
    {
        name: 'Eeth Koth',
        url: 'https://pm1.narvii.com/6126/5d2eb337b58e91cdc33319a745ef66c127eb4d69_hq.jpg'
    },
    {
        name: 'Adi Gallia',
        url: 'https://qph.cf2.quoracdn.net/main-qimg-2db58b4f509f94a70cc9a01cfe9e0633-lq'
    },
    {
        name: 'Saesee Tiin',
        url: 'https://comicvine.gamespot.com/a/uploads/scale_medium/0/77/214057-27080-saesee-tinn.jpg'
    },
    {
        name: 'Yarael Poof',
        url: 'https://us.v-cdn.net/6025736/uploads/editor/2g/o7n81pjni08d.jpg'
    },
    {
        name: 'Plo Koon',
        url: 'https://i.pinimg.com/474x/5b/49/9c/5b499cfdd78ef6607f96f6cf98e5226d--the-sky-the-ojays.jpg'
    },
    {
        name: 'Mas Amedda',
        url: 'https://i.pinimg.com/736x/1a/c5/7d/1ac57dede4e14c088d3931f392981e06.jpg'
    },
    {
        name: 'Gregar Typho',
        url: 'https://i.pinimg.com/474x/98/48/79/9848794fee34d36318b27fff10be7b6a.jpg'
    },
    {
        name: 'Cordé',
        url: 'http://images6.fanpop.com/image/photos/37400000/Cord-on-coruscant-as-Padm-star-wars-attack-of-the-clones-37430018-236-365.jpg'
    },
    {
        name: 'Cliegg Lars',
        url: 'https://www.starwars-union.de/bilder/lexikon/20070921lars.jpg'
    },
    {
        name: 'Poggle the Lesser',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQItj106l4Gl24mxChEGs-47Q-KbVP_OZsx8y6U8oGbWO11a12hVRI-7HNoXqfJmOp24nE&usqp=CAU'
    },
    {
        name: 'Luminara Unduli',
        url: 'https://assets.mycast.io/characters/luminara-unduli-243875-normal.jpg?1566270994'
    },
    {
        name: 'Barriss Offee',
        url: 'http://pm1.narvii.com/6009/c953511494c4ccc1948bbda71f5e849ae4aa57c5_00.jpg'
    },
    {
        name: 'Dormé',
        url: 'https://i.pinimg.com/originals/53/fe/cc/53fecc7328f3dde416aa3b25c5e79225.jpg'
    },
    {
        name: 'Dooku',
        url: 'https://i.pinimg.com/originals/13/89/63/1389632f3f8415fcf1282439291d61a5.jpg'
    },
    {
        name: 'Bail Prestor Organa',
        url: 'https://www.latercera.com/resizer/2NbxHGxSDZVM-wQmbH6bAFTcS4k=/380x570/filters:focal(169x70:179x60)/cloudfront-us-east-1.images.arcpublishing.com/copesa/IMX23HGHTFG2NN2DVDMD42F5NU.jpg'
    },
    {
        name: 'Jango Fett',
        url: 'https://i.pinimg.com/originals/f9/5f/ab/f95fab3b210485e1782972f187aa9c19.jpg'
    },
    {
        name: 'Zam Wesell',
        url: 'https://i.pinimg.com/originals/4c/eb/f6/4cebf666c94a503fe90474e3c48920a8.jpg'
    },
    {
        name: 'Dexter Jettster',
        url: 'https://pbs.twimg.com/profile_images/808418219731996672/iFgUn3zn_400x400.jpg'
    },
    {
        name: 'Lama Su',
        url: 'https://i.pinimg.com/474x/fe/b7/29/feb72950856772dfc932d1c458e5677e--star-wars-celebration-movie-ideas.jpg'
    },
    {
        name: 'Taun We',
        url: 'https://rpggamer.org/uploaded_images/TaunWeKaminoan.jpg'
    },
    {
        name: 'Jocasta Nu',
        url: 'http://www.swx.it/databank/images/9/94/Jocasta_nu_2.jpg'
    },
    {
        name: 'R4-P17',
        url: 'https://i2.wp.com/www.open-electronics.org/wp-content/uploads/2017/11/R4-P17_feat7.jpg'
    },
    {
        name: 'Wat Tambor',
        url: 'https://i.pinimg.com/originals/90/93/1b/90931befbc9b08c69d80e1ba05267e44.png'
    },
    {
        name: 'San Hill',
        url: 'http://pm1.narvii.com/6337/46cb802b84bdc633035a06bc3dc6dfa4f049f2fb_00.jpg'
    },
    {
        name: 'Shaak Ti',
        url: 'https://i.pinimg.com/originals/bc/5b/b2/bc5bb2531c4d8af600e6067c78a980ab.jpg'
    },
    {
        name: 'Grievous',
        url: 'https://i.pinimg.com/736x/d7/b2/8b/d7b28ba2c77e4ce2d061b84df1fc1ea7--christmas-trees-starwars.jpg'
    },
    {
        name: 'Tarfful',
        url: 'https://i.pinimg.com/originals/11/0b/51/110b5178cf12e4c295d6151a049068ff.jpg'
    },
    {
        name: 'Raymus Antilles',
        url: 'https://m.media-amazon.com/images/I/71XA1giNTfS._AC_SX425_.jpg'
    },
    {
        name: 'Sly Moore',
        url: 'https://pm1.narvii.com/6087/7a053912d29058cf3b4375517b0020fd6c41dd05_hq.jpg'
    },
    {
        name: 'Tion Medon',
        url: 'https://i.pinimg.com/564x/df/1a/3d/df1a3d5982d42589c5e10f6920422ce2.jpg'
    }
];