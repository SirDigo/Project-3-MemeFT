puts "🌱 Seeding spices..."
User.destroy_all
Memeft.destroy_all

#Users seeds
#User.create(user_name: "", about: "", links: "")

memeGod = User.create(username: "MemeGod", about: "You can't beat the value of a NYC Pizza slice.", links: "https://github.com/MemeEngineer")
nutz = User.create(username: "MFTeez Nutz", about: "Tough time don\'t last, only tough people", links: "https://github.com/jbotesazan")
sir = User.create(username: "Sir. Digo", about: "Mmmm Splended, simply extraordinary.", links: "https://github.com/SirDigo")
master69=User.create(username: "Master69", about: "Secretly part of the Illumanti", links: "https://github.com/")

#MemeFts seeds
#Memeft.create(title: "", price: , creator: "", owner: "", sale: , user_id: , src: "")

Memeft.create(title: "Bev Combo", price: 150, creator: "MemeGod", owner: "MFTeezz Nutz", sale: true, user_id: nutz.id, src: "https://miro.medium.com/max/512/1*hwZqIK-Po9ek5Y4NmRPlcQ.png")
Memeft.create(title: "Empire Slice", price: 1_000, creator: "MemeGod", owner: "Sir. Digo", sale: true, user_id: sir.id, src: "https://miro.medium.com/max/512/1*gQQhl8ZwIgn7RzfLzpA8wQ.png")
Memeft.create(title: "NY Pi", price: 10_000, creator: "MemeGod", owner: "MemeGod", sale: false, user_id: memeGod.id, src: "https://miro.medium.com/max/512/1*oEFmnqy6Wcn2sJTgvccOGA.png")
Memeft.create(title: "Cheese Drip", price: 550, creator: "MemeGod", owner: "MFTeez Nutz", sale: true, user_id: nutz.id, src: "https://miro.medium.com/max/512/1*H_eL7ZB-3GiGOjEHQ3HG8g.png")
Memeft.create(title: "OG Slice", price: 200, creator: "MemeGod", owner: "MemeGod", sale: true, user_id: memeGod.id, src: "https://miro.medium.com/max/512/1*EpuXtq3bjNiqSIxcBOKx9w.png")
Memeft.create(title: "Thug Slice", price: 500, creator: "MemeGod", owner: "MemeGod", sale: true, user_id: memeGod.id, src: "https://miro.medium.com/max/512/1*lcU4jRZIwk2kR-so-mLTHA.png")
Memeft.create(title: "Oregano", price: 150, creator: "MemeGod", owner: "MFTeez Nutz", sale: true, user_id: nutz.id, src: "https://miro.medium.com/max/512/1*43g1aqW-aslQDXlSYUJHew.png")
Memeft.create(title: "Pizza Rat", price: 1_000, creator: "MemeGod", owner: "Sir. Digo", sale: true, user_id: sir.id, src: "https://miro.medium.com/max/512/1*aCUoPNyo27C8J4MbiwgvDw.png")
Memeft.create(title: "Pizza Time", price: 5_000, creator: "Marvel Studios", owner: "MemeGod", sale: true, user_id: memeGod.id, src: "https://miro.medium.com/max/1600/1*mtjh6-Ya85OWKkU8RInM6A.png")
Memeft.create(title: "Snackintosh", price: 400, creator: "MemeGod", owner: "Sir. Digo", sale: true, user_id: sir.id, src: "https://miro.medium.com/max/256/1*3ZmNKX3YJKQlZw0mrADsFA.png")
Memeft.create(title: "The Big Pinapple", price: 100, creator: "MemeGod", owner: "MemeGod", sale: true, user_id: memeGod.id, src: "https://miro.medium.com/max/256/1*d7pDcoNW0SvkfgkWONY2jQ.png")
Memeft.create(title: "Whole Pi", price: 500, creator: "MemeGod", owner: "Sir. Digo", sale: true, user_id: sir.id, src: "https://miro.medium.com/max/256/1*1Rl5YxWEMJoSwz-tvGmvxw.png")
Memeft.create(title: "Chelsea", price: 1_000, creator: "MFTeez Nutz", owner: "MFTeez Nutz", sale: false, user_id: nutz.id, src: "https://miro.medium.com/max/160/1*pqDEyvFYlkhRnKUzgBJODQ.png")
Memeft.create(title: "Bob", price: 150, creator: "Sir. Digo", owner: "MFTeez Nutz", sale: true, user_id: nutz.id, src: "https://miro.medium.com/max/160/1*cpiW0FlC2nPOSXoJ_V6LDQ.png")
Memeft.create(title: "Buff Rat", price: 600, creator: "Sir. Digo", owner: "Sir. Digo", sale: true, user_id: sir.id, src: "https://miro.medium.com/max/160/1*3P-Ezw4Lyt_jZ259c8pMrw.png")
Memeft.create(title: "Dia Wae", price: 1_000, creator: "Sir. Digo", owner: "MemeGod", sale: true, user_id: memeGod.id, src: "https://miro.medium.com/max/160/1*onUHSM7pRIzzIX9_el2AWQ.png")
Memeft.create(title: "Jump-Man", price: 200, creator: "Sir. Digo", owner: "MFTeez Nutz", sale: true, user_id: nutz.id, src: "https://miro.medium.com/max/160/1*8Hj9_tzYNIa1Q8lJBDZNeg.png")
Memeft.create(title: "Green Jump-Man", price: 200, creator: "Sir. Digo", owner: "Sir. Digo", sale: true, user_id: sir.id, src: "https://miro.medium.com/max/160/1*RrjnUdEdHcOOwIY6vAkDRA.png")
Memeft.create(title: "Sanic", price: 700, creator: "Sir. Digo", owner: "MemeGod", sale: true, user_id: memeGod.id, src: "https://miro.medium.com/max/160/1*n0bVh62cJD4O8P-GmUl2bA.png")
Memeft.create(title: "Sus Car", price: 500, creator: "Sir. Digo", owner: "Sir. Digo", sale: false, user_id: sir.id, src: "https://miro.medium.com/max/160/1*CgvqJ2SdEVMavme8ZLHeYw.png")
Memeft.create(title: "Without Head", price: 200, creator: "Sir. Digo", owner: "Sir. Digo", sale: true, user_id: sir.id, src: "https://miro.medium.com/max/160/1*Q_bX-u16yCtctIchOe9BRw.png")
Memeft.create(title: "Weird Goblin", price: 200, creator: "Sir. Digo", owner: "MFTeez Nutz", sale: true, user_id: nutz.id, src: "https://miro.medium.com/max/160/1*nt81F3JxvoQM_UcB0Vz0ow.png")
Memeft.create(title: "Weird Trainer", price: 600, creator: "Sir. Digo", owner: "MemeGod", sale: true, user_id: memeGod.id, src: "https://miro.medium.com/max/160/1*sEoF_VcPCpA2IOs_XVH8og.png")

puts "✅ Done seeding!"
