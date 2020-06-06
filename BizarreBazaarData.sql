insert into [User] (FirstName, LastName, AcctCreated, IsSeller, UserName, Email, [Password])
values('James', 'Baldwin', getdate(), 1, 'JBaldwin', 'jamesbaldwin@gmail.com', '123456'),
('Indiana', 'Jones', getdate(), 1, 'IJones', 'indianajones@gmail.com', '123456'),
('Frodo', 'Baggins', getdate(), 1, 'FBaggins', 'theonlybaggins@bagend.com', '123456'),
('Paula', 'Jones', getdate(), 1, 'PSIPaula', 'pjones@gmail.com', 'pkfire120'),
('Link', 'BetweenWorldsington', getdate(), 1, 'Hyruleboi', 'link@gmail.com', 'ganonsux123'),
('Doom', 'Slayer', getdate(), 1, 'Doom Guy', 'doomslayer@gmail.com', 'ih8demons'),
('Gordon', 'Freeman', getdate(), 1, 'Mr. Freeman', 'gfreeman@gmail.com', 'ilovealyxvance'),
('Mario', 'Mario', getdate(), 1, 'Mario', 'mariobro@gmail.com', 'itsam3mari0'),
('Bowser', 'Koopa', getdate(), 1, 'King Koopa', 'bowser@gmail.com', 'kingofthek00pas'),
('Mayor', 'Lewis', getdate(), 1, 'StardewLew', 'mayorlewis@gmail.com', 'pelicantownrulz'),
('Professor', 'Oak', getdate(), 1, 'Professor Oak', 'oak@gmail.com', 'pokemonrmypassion'),
('Banjo', 'Kazooie', getdate(), 1, 'BearAndBird', 'bkazooie@gmail.com', 'getjiggywithit')


insert into Product (ProductTypeId, Price, Title, [Description], Quantity, UserId, DateAdded)
values(4, 250000.00, 'Cupids Bow & Arrow', 'Tried of dating apps? One of Cupid''s arrows fired from his bow will cause the person struck to fall in love.', 20, 1, getdate()),
(2, 800000.00, 'Dorothy''s Ruby Slippers', 'Go to Oz with these magical slippers work by Judy Garland in the 1939 musical film The Wizard of Oz.', 5, 1, getdate()),
(6, 350000000.00, 'Heart of the Ocean Diamond', 'Resurrected from the depths of the ocean, this memorizing blue diamond deserves a worthy owner. But word of caution, it may be cursed.', 5, 1, getdate()),
(3, 2000000.00, 'The Book of the Dead', 'The Book of the Dead contains ancient spells and incantations that could resurrect the dead.', 2, 1, getdate()),
(2, 2400000.00, 'Napoleon Bonaparte''s Hat', 'This Bicorne hat was worn by Napoleon during the Battle of Waterloo.', 10, 1, getdate()),
(1, 2000000.00, 'Michael Jacksons Hyperbaric Oxygen Chamber', 'MJ took naps in this chamber in hopes of living ‘forever’ 10 years after his death. Some say his spirit still remains there.', 2, 1, getdate()),
(5, 100000.00, 'Scrat’s Acorn', 'This favorite food for Saber-toothed squirrels has been on every film in the Ice Age franchise.', 20, 1, getdate()),
(3, 2000000.00, 'Map of El Dorado', 'Is El Dorado real or a myth? With this map you can discover its true existence.', 10, 1, getdate()),
(5, 3000000.00, 'Fountain of Youth', 'A mythical spring that restores the youth of anyone who drinks or bathes in its waters.', 10, 1, getdate()),
(5, 500000.00, 'Alice’s Drink Me potion and Eat Me cakes combo', 'Sure, they don’t do much for Alice, but if used properly, they could be lots of fun. Please don’t and eat responsibly.', 50, 1, getdate()),
(1, 250000.00, 'Sammy Davis Jr Glass Eye', 'Preserve the essence of the man who made us resonate with Willie Wonka’s Candyman.', 7, 1, getdate()),
(4, 500000.00, 'Neuralyzer', 'Ready to selectively wipes someone’s memory? This gadget let’s you select a time period you would like to rewrite.', 50, 1, getdate()),
(5, 5000.00, 'Poison Apple', 'Apple coasted with a poisonous chemical that will cause the person who eats it to fall into an eternal sleep.', 100, 1, getdate()),
(1, 5000.00, 'Jetson Car Suitcase', 'Save time and energy by buying a self-driving vehicle that turns into a suitcase once you exit the vehicle.', 100, 1, getdate()),
(3, 1500000.00, 'The Boot of Cortez', 'A 26.6lb gold nugget shaped like a boot, it was nicknamed the Boot of Cortez.', 1, 2, getdate()),
(3, 15000000.00, 'Magna Carta', 'Charter of rights agreed to by King John of England at Runnymede, near Windsor, on 15 June 1215. A truly incredible piece of history.', 1, 11, getdate()),
(7, 850000000.00, 'Mona Lisa', 'The Mona Lisa is a half-length portrait painting by the Italian artist Leonardo da Vinci.', 1, 2, getdate()),
(6, 100000000.00, 'Largest Pearl in the World', 'A two foot long, 75lb pearl discovered in the Philippines will make a great addition to any jewelry collection.', 1, 2, getdate()),
(3, 2950000.00, 'T-Rex', 'The 68 million-year-old remains of a Tyrannosaurus rex are up for grabs. You will never have another oppurtunity like this one.', 1, 9, getdate()),
(2, 100000.00, 'Cinderellas glass slippers', 'Lightly worn glass slippers by Cinderella, surprisingly comfortable', 1, 5, getdate()),
(3, 500000000.00, 'The Ark of the Covenant', 'The Ark of the Covenant is a gold-covered wooden chest with lid cover described in the Book of Exodus as containing the two stone tablets of the Ten Commandments.', 1, 2, getdate()),
(6, 350000000.00, 'Hope Diamonds', '45.52ct deep blue diamond', 1, 2, getdate()),
(7, 100000000.00, 'The Starry Night', 'This painting is by Vincent Van Gogh and is regarded as one of Van Goghs finest works and is one of the most recognized paintings in the history of Western culture.', 1, 2, getdate()),
(1, 71000.00, 'Buddhas Tooth', 'Although Buddha was cremated, one of his teeth remains. It is used in ceremonies, rituals, and offerings.',1, 6, getdate()),
(2, 68.00, 'Franklin Badge', 'A Franklin Badge is a unique badge famous for its reflective properties that protect its holder from specific PSI abilities.', 3, 4, getdate()),
(4, 599.00, 'Master Sword', 'The Master Sword is a legendary sword said to have the ability to seal away darkness when wielded by the chosen hero.', 1, 5, getdate()),
(4, 666.66, 'BFG9000', 'The BFG9000 is a large, solid metal gun which fires large balls of green plasma. The initials composing the weapon''s name stand for... well let''s just say it''s a really big gun.', 1, 6, getdate()),
(4, 3.00, 'Fire Flower', 'A Fire Flower is a powerup that when obtained transforms the user into their Fire form, allowing them to throw fireballs.', 100, 8, getdate()),
(4, 12.00, 'Spiny Shell', 'A Spiny Shell, better known as the blue shell, allows a kart racer to shoot a projectile directly at the racer in first place.', 5, 9, getdate()),
(4, 125.00, 'Zero Point Energy Field Manipulator', 'The Zero Point Energy Field Manipulator, better known as the gravity gun, allows the wielder to directly manipulate objects in the world, often allowing them to be used as projectiles against hostiles.', 1, 7, getdate()),
(5, 2000.00, 'Stardrop', 'A mysterious fruit that empowers those who eat it. The flavor is like a dream... a powerful personal experience, yet difficult to describe to others.', 7, 10, getdate()),
(1, 50.00, 'Master Ball', 'A rare Pokeball with a 100% catch rate.', 34, 11, getdate()),
(1, 100.00, 'Power Moon', 'Power Moons are used to power the airship known as the Odyssey. A powered up ship can take you to far away kingdoms.', 999, 8, getdate()),
(1, 153.00, 'Ice Key', 'This mysterious key made entirely of ice originally had nothing to unlock, but in a land separated by space and time it is said to have opened a secret chest with a powerful magic creature inside.', 1, 12, getdate()),
(1, 500, 'Bag of Holding', 'This bag holds things, but you aren''t really sure where it holds them.', 50, 3, getdate()),
(2, 200000, 'Dragon Scale Armor', 'An dark emerald scale armor that was crafted ages ago. Gives +1 to Charima when worn.', 15, 6, getdate()),
(7, 350, 'Flying Carpet', 'Moderately used  and cloroworn rug. It was once vibrant and plush. Now it''s somewhere between squishy and flat.', 8, 12, getdate()),
(4,1000, 'Excalibur', 'Sword that proclaimed King Arthur fit to rule. Why is this something that fell out of fashion? You may never know.', 1, 5, getdate()),
(6, 110000000, 'The One Ring', 'One Ring to rule them all...my precious.', 1, 3, getdate()),
(2, 100, 'Gandalf''s Hat', 'Faded blue woolen hat that is rumoured to have been worn by Gandalf the Grey. Gives a magical tingly feeling when worn.', 1, 3, getdate()),
(4, 800, 'Gandalf''s Staff', 'Smooth white staff of Gandalf the White. Rumored to be a branch of the white tree of Gondor.', 1, 3, getdate()),
(7, 50, 'Magic Lamp', 'Golden lamp made in a very cartoonish Indian style. Possibly belonged to someone named Aladdin.', 5, 2, getdate()),
(1, 945, 'Phial of Galadriel', 'Delicate crystal phial containing a glistening watery substance. Is a light in dark places when all other lights go out.', 1, 3, getdate()),
(1, 250, 'Palantír', 'Dark obsidian like orb with smoke swirling within it. When used a strong red light glows from within, and you get the sense that you''re being watched.', 9,9, getdate()),
(1, 35, 'Flying Broom', 'Well used broomstick with a squeaky saddle and stirrups. The bristles at the end are all but gone. Makes a throaty sputtering noise when started.', 120, 11, getdate()),
(7, 300, 'Magic Mirror', 'Large and overly ornate victorian-style mirrior. The glass is always black, but sometimes you catch something in the mirror out of the corner of your eye. Also, are you hearing that whispering?', 10, 8, getdate()),
(4, 6500, 'Buster Sword', 'Large sword with a square blade and thick hilt wrapped in leather. Blade contains multiple notches and there is a strange hole about 4 inches from the hilt. Makes you want to bleach your hair and buy lots of hair gel.', 1, 6, getdate()),
(5, 50, 'Golden Apple', 'Medium sized apple covered in solid gold. It''s said that if you eat it the apple you will gain boosts to stamina, strength and speed. Good luck not breaking your teeth.', 25, 10, getdate()),
(1, 500, 'Ocarina', 'Small oval whistle made from a dark hollow wood. Makes a high, but beautiful sound. You feel yourself being pulled into another world.', 3, 5, getdate()),
(4, 500, 'Leia''s Lightsaber', 'A sleek silver-handled lightsaber said to have once beloned to Master Leia Organa Solo. When the blade ignites it hums happily and glows a clear emerald green. You sense a disturbance in the Force.', 1, 7, getdate())

insert into PaymentType ([Name])
values('Visa'),
('MasterCard'),
('PayPal')

insert into Payment (PaymentTypeId, AcctNumber, UserId)
values(1, 0000011111, 1)

insert into [Order] (UserId, OrderTotal, InvoiceDate, IsComplete, PaymentId)
values(1, 10000.00, getdate(), 1, 1)

insert into ProductType ([Name])
values('Misc'),
('Clothing'),
('History'),
('Weapon'),
('Edible'),
('Jewelry'),
('Art')

insert into LineItem (OrderId, ProductId, Quantity)
values(1, 46, 2)
