var initDemo = function(){
				var header = document.getElementById("header");
				var skin = location.href.split('skin=')[1];

				if(!skin) {
					skin = 'FaceSnap';
				}

				if(skin.indexOf('#')!==-1){
				   skin = skin.split('#')[0];
				}

				var skins = {
					'Snapgram': {
						'avatars': true,
						'list': false,
						'autoFullScreen': false,
                        'cubeEffect': true
					},

					'VemDeZAP': {
						'avatars': false,
						'list': true,
						'autoFullScreen': false,
                        'cubeEffect': false
					},

					'FaceSnap': {
						'avatars': true,
						'list': false,
						'autoFullScreen': true,
                        'cubeEffect': false
					},

					'Snapssenger': {
						'avatars': false,
						'list': false,
						'autoFullScreen': false,
                        'cubeEffect': false
					}
				};

				var timeIndex = 0;
				var shifts = [35, 60, 60*3, 60*60*2, 60*60*25, 60*60*24*4, 60*60*24*10];
				var timestamp = function() {
				    var now = new Date();
				    var shift = shifts[timeIndex++] || 0;
				    var date = new Date( now - shift*1000);

				    return date.getTime() / 1000;
				};

				var stories = new Zuck('stories', {
					backNative: true,
                    previousTap: true,
					autoFullScreen: skins[skin]['autoFullScreen'],
					skin: skin,
					avatars: skins[skin]['avatars'],
					list: skins[skin]['list'],
                    cubeEffect: skins[skin]['cubeEffect'],
					localStorage: true,
					stories: [
						{
							id: "ramon",
							photo: "https://scontent.flhr5-1.fna.fbcdn.net/v/t1.0-9/25659525_1660669194003997_812779653662270213_n.jpg?_nc_cat=102&_nc_ht=scontent.flhr5-1.fna&oh=4de2328aab11e7ea40fb38265d2803a3&oe=5D0BB7BE",
							name: "About Me",
							link: "https://ymcmbennie.github.io/portfolio/",
							lastUpdated: timestamp(),
							items: [
								Zuck.buildItem("ramon-1", "photo", 3, "https://scontent.flhr5-1.fna.fbcdn.net/v/t1.0-9/36760932_1928008557270058_3957385924551114752_n.jpg?_nc_cat=110&_nc_ht=scontent.flhr5-1.fna&oh=227e06defd6973a16ebd97b726f06e2d&oe=5D0EBD97", "https://scontent.flhr5-1.fna.fbcdn.net/v/t1.0-9/36760932_1928008557270058_3957385924551114752_n.jpg?_nc_cat=110&_nc_ht=scontent.flhr5-1.fna&oh=227e06defd6973a16ebd97b726f06e2d&oe=5D0EBD97", '', false, false, timestamp()),
								Zuck.buildItem("ramon-2", "video", 0, "https://scontent.flhr5-1.fna.fbcdn.net/v/t1.0-9/30653295_1800559816681600_8844709049816580096_n.jpg?_nc_cat=103&_nc_ht=scontent.flhr5-1.fna&oh=6ce5ae6c1c6b166cedde76b175449310&oe=5D241111", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg", '', false,  false, timestamp()),
								Zuck.buildItem("ramon-3", "photo", 3, "https://scontent.flhr5-1.fna.fbcdn.net/v/t1.0-9/14333556_1100542973349958_8578233677748326047_n.jpg?_nc_cat=103&_nc_ht=scontent.flhr5-1.fna&oh=3e86e6637cc0966088419cdbcd94b27f&oe=5D0B3933", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png", 'bensonad.pro', 'Visit my Portfolio', false, timestamp())
							]
						},
						{
							id: "gorillaz",
							photo: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/2.jpg",
							name: "Architecture",
							link: "",
							lastUpdated: timestamp(),
							items: [
								Zuck.buildItem("gorillaz-1", "video", 0, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.mp4", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.jpg", '', false, false, timestamp()),
								Zuck.buildItem("gorillaz-2", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg", '', false, false, timestamp()),
							]
						},
						{
							id: "notladygaga",
							photo: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/3.jpg",
							name: "Code Pro",
							link: "",
							lastUpdated: timestamp(),
							items: [
								Zuck.buildItem("ladygaga-1", "photo", 5, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg", '', false, false, timestamp()),
								Zuck.buildItem("ladygaga-2", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg", 'http://ladygaga.com', false, false, timestamp()),
							]
						},
						{
							id: "starboy",
							photo: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/4.jpg",
							name: "Process",
							link: "",
							lastUpdated: timestamp(),
							items: [
								Zuck.buildItem("starboy-1", "photo", 5, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg", '', false, false, timestamp())
							]
						},
						{
							id: "riversquomo",
							photo: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/5.jpg",
							name: "Travel",
							link: "",
							lastUpdated: timestamp(),
							items: [
								Zuck.buildItem("riverscuomo", "photo", 10, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg", '', false, false, timestamp())
							]
						},
						{
							id: "ramon1",
							photo: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg",
							name: "Studio",
							link: "https://ramon.codes",
							lastUpdated: timestamp(),
							items: [
								Zuck.buildItem("ramon-1", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg", '', false, false, timestamp()),
								Zuck.buildItem("ramon-2", "video", 0, "https://scontent.flhr5-1.fna.fbcdn.net/v/t1.0-9/30653295_1800559816681600_8844709049816580096_n.jpg?_nc_cat=103&_nc_ht=scontent.flhr5-1.fna&oh=6ce5ae6c1c6b166cedde76b175449310&oe=5D241111", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg", '', false,  false, timestamp()),
								Zuck.buildItem("ramon-3", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png", 'https://ramon.codes', 'Visit my Portfolio', false, timestamp())
							]
						},
						{
							id: "gorillazsketch",
							photo: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/2.jpg",
							name: "Sketches",
							link: "",
							lastUpdated: timestamp(),
							items: [
								Zuck.buildItem("gorillaz-1", "video", 0, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.mp4", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.jpg", '', false, false, timestamp()),
								Zuck.buildItem("gorillaz-2", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg", '', false, false, timestamp()),
							]
						},
						{
							id: "notanotherladygaga",
							photo: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/3.jpg",
							name: "Typography",
							link: "",
							lastUpdated: timestamp(),
							items: [
								Zuck.buildItem("ladygaga-1", "photo", 5, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg", '', false, false, timestamp()),
								Zuck.buildItem("ladygaga-2", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg", 'http://ladygaga.com', false, false, timestamp()),
							]
						},
						{
							id: "starboywewqdwefwf",
							photo: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/4.jpg",
							name: "Sports",
							link: "",
							lastUpdated: timestamp(),
							items: [
								Zuck.buildItem("starboy-1", "photo", 5, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg", '', false, false, timestamp())
							]
						},
						{
							id: "riversquomofwfwfwwcw",
							photo: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/5.jpg",
							name: "More",
							link: "",
							lastUpdated: timestamp(),
							items: [
								Zuck.buildItem("riverscuomo", "photo", 10, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg", '', false, false, timestamp())
							]
						}
					]
				});

                var el = document.querySelectorAll('#skin option');
                var total = el.length;
                for (var i = 0; i < total; i++) {
					var what = (skin==el[i].value)?true:false;

					if(what){
						el[i].setAttribute('selected', what);

						header.innerHTML = skin;
						header.className = skin;
					} else {
						el[i].removeAttribute('selected');
					}
                }

				document.body.style.display = 'block';
			};

			initDemo();