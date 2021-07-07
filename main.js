var scaleX = 1.2;
var scaleY = 1.2;
var hover = false;
var letter = false;
var env = false;
var mobile = false;
var current = 0;

// Sticker/location names
var stickers = ["boscoffee", "browns", "cinema", "common", "ministop", "myplace", "pancake", "ricetop", "rooftop", "yellow"]

// Location data
var locations = {
	"boscoffee" : [
		"These warm places",
		"Bo’s Cafe",
		"Dani Capinding",
		"It was always warm whenever I entered Bo’s. Not in a heat-wave sort of way, but warm wherein I felt at ease being amongst patrons who were like me; studying or doing God knows what. It was a congenial spot that still managed to feel intimate. Often filled with a sea full of students, Bo’s had an effortless way of making one feel on board.<br><br>As a freshman from an outlying town where cafes were rare, Katipunan felt like foreign ground; it was a drastic change from what I was used to. My freshman self made it a point to adapt and to fit in, making sure that I could call this place “home” for the next four years of my life—or so I thought.<br><br>Being a city newbie, I was on the hunt to go to the different cafes to find myself a decent study place. Fortunately, I was able to stumble upon Bo’s Coffee. It couldn’t be missed since it was situated beside a student go-to: National Bookstore.<br><br>I remember the intimidation I first felt because of the many students inside, but then I realized everyone looked focused and had their world when they were there.<br><br>It was a special place for many Ateneans; it became an escape for them and eventually me, too. Bo’s became one of my few permanent abodes in Katipunan. Even if it was always packed, it didn’t stop me—or anyone else—from waiting for a seat.<br><br>The number of times I’ve been to Bo’s made it seem like it was part of my daily routine. I always had the same order: A cold white brew alongside their carrot bar that always satisfied my sweet tooth. When I didn’t have time to leave because of a long study session, one of their pasta dishes was my go-to for keeping me full. I always chose the  same spot, too; a seat on the second floor which had a socket (if I was lucky enough to get there early).<br><br>These were minute things that seemed peripheral for all students, but with Bo’s closing, one can’t help but feel grief. These little things kept Katipunan at ease and comforted the many confused students whose eyes were all towards their future.<br><br>Nowadays, I can’t help but think about the past I had with Bo’s. Hearing about its closing felt like losing a friend. I wish I spent more time there, took more photos; had the chance to say a proper goodbye to the staff. It felt silly to grieve over a place, but knowing that I can no longer relive my time in Bo’s is what saddens me.<br><br>I constantly go back to the productive and not-so-productive days, the loud catching up with friends, the quiet self-care dates I had with myself. Most of my time at the cafe was spent rushing; leaving to make it in time for class, competing with other newcomers for a seat. I wish, now, that I had slowed down to appreciate the fact that Bo’s bore witness to many of my highs and lows.<br><br>Bo’s will always be as my pot of gold at the end of the gate 2.5 footbridge. Even with its closing, it will be known as my designated tambay-slash-study spot when I look back. And maybe in another life, I’ll be able to relieve the warmth I felt in Bo’s; the ease and comfort it provided me while drinking my cold white brew, dreaming of making my clueless freshman self proud.<br>"
		],
	"browns": [
		"Back no more",
		"Brown’s Gourmet",
		"Caitlin Anne Young",
		"There’s a footbridge that lies across Katipunan Avenue, just between Ateneo de Manila University and Miriam College. Cross it and you’ll be greeted by the commercial lights of Regis Center. The first restaurant you’ll see once you step off the asphalt is Brown’s Gourmet.<br><br>But that wasn’t how I first arrived at Brown’s Gourmet.<br><br>Instead, I was a freshman, piling into a car with 10 other blockmates I had met just the day before. It was the final night of OrSem; following another humid, rainy day of activities, we were famished and unwilling to brave the snaking lines of the covered courts’ food booths. I still remember tripping over the pronunciation of “Regis” when I called to tell my parents I was eating out, my friends egging me on to stay longer, and the hot meal we had shared over raucous laughter. Since that was my introduction to Katip, I expected it would be a mainstay.<br><br>Imagine my surprise when—weeks later, a month before the Ateneo Blue Eagles would go on to win the 2017 Basketball UAAP Championship—Brown’s Gourmet <a href= https://www.facebook.com/BrownsGourmet/posts/1739643172736717 target=_blank>announced</a> that it would be closing on October 31. At that point, it had already closed its <a href= https://www.facebook.com/BrownsGourmet/photos/a.1665787200122315/1665787210122314/  target=_blank>three-year old Greenfield branch</a>. My Facebook was abuzz with sad reacts and tags from Ateneo and UP friends alike, mourning the loss of the establishment.<br><br>The eulogies didn’t last long, though. After several farewells, on October 30, the restaurant’s Facebook page <a href= https://www.facebook.com/BrownsGourmet/photos/a.195713227129727/1747246345309733/  target=_blank>revealed</a> that a couple would take over the restaurant. Brown’s Gourmet Katipunan would be here to stay, much to the joy of many.<br><br>Perhaps that incident would set the tone for the small restaurant, which served Filipino comfort food with a gourmet twist. The place was bedecked with twinkling lights and lush green plants that added color to black and white tables and chairs (celebrity couple #LizQuen even had a <a href= https://www.facebook.com/BrownsGourmet/posts/2377309575636737  target=_blank>photo shoot</a> there once!). Its affordable yet quality food had made it a Regis staple. It was as fine-dining as Katip could get, as it had everything from tocino to omurice to pasta. <br><br>A welcome respite from school, Brown’s had students braving both sun and rain to study, bond, and laugh over its delicious meals. Since the place had been saved at the last minute, perhaps we took it for granted.<br><br>As such, Brown’s Gourmet would always be remembered—not just as a hearty Atenean favorite, but as a fighter. Even as the pandemic began closing its net around Katip, the restaurant continued to serve delicious food, offering a revamped menu as well as online catering. It even <a href= https://www.facebook.com/BrownsGourmet/posts/3862120073822339  target=_blank>distributed food packs</a> to help its staff members and others affected by Typhoon Ulysses. That is, until Brown’s announced in November that it would <a href= https://www.facebook.com/BrownsGourmet/posts/3843883668979313  target=_blank>cease operations</a> after December 30. Even then, it refused to give up, relocating its kitchen to Loyola Heights to provide holiday meals.<br><br>Unlike before wherein Brown’s Gourmet was magically saved at the final moment, the place would be back no more. As we rang in the new year, Brown’s Gourmet closed its doors. Though who knows? Maybe someday, when things get back to normal, we won’t need to live to tell the tale. Maybe it’ll return to Regis Center, creating memories for a brand-new generation of students.<br><br>So goodbye, Brown’s Gourmet. You were well-loved, and you will be well-missed."
			],
	"cinema": [
		"Another way to return",
		"Cinema Centenario", 
		"Ann Domingo", 
		"Despite all these varying backgrounds and preferences, I’m pretty sure everybody loves films. But it’s not just the films themselves we love. It’s also interesting how we create intimate rituals around them with our loved ones, like celebrating the end of finals week by hitting the cinemas or enjoying a night in through a Netflix watch party. Film doesn’t just connect us to the emotional journey of the fictional characters on screen; it creates opportunities for us to bond with those we want to share the story with.<br><br>But when was the last time we felt actually represented on the big screen? I suppose, like many of us, I grew up watching a lot of Western media as my sources of entertainment. Saturday nights were usually reserved for watching the next Marvel superhero movie with the family. Even the movies I consider “guilty pleasures” are still hopeful stories about white people in first world countries achieving romance or happiness.<br><br>Although I’ve made more effort to watch local films growing up, these consumption habits have still carried over into my present. My Netflix watch history is still dominated by Western TV series; I think I can count with one hand the number of local films I’ve queued for my Letterboxd watchlist. We Filipinos have a bad reputation for being loud when we finally see representation on screen but maybe some of this is understandable. To this day, I still struggle to find those stories that actually remind me of home and my own life. <br><br>So when I found out about Cinema Centenario as I moved into my dorm in Katipunan, I knew I had to visit more than once. The first film I caught in this cinema house was for the award-winning film Hereditary (2018), so it wasn’t really local. But I made sure to come back to laugh at the comedy Bar Boys (2017) and tear up at the drama Apocalypse Child (2015).<br><br>Cinema Centenario was heaven for the alternative with its promotion of local indie films, but it was also an inclusive space for everyone else as it provided every genre you wanted. The space was small, the screen was nothing quite as big as the ones in malls, and there weren’t always lots of people, but that made each viewing so much more intimate. Regardless of your tastes and preferences, this local cinema house always welcomed you home. <br><br>Sadly, the titles I mentioned previously were the only films I was able to catch before Cinema Centenario closed down. I had started to accept this trend of shutdowns due to circumstances none of us could have prevented, but hearing about this news truly made me think, “2020 has gone too far.” <br><br>It seems a little cruel that a cinema house that provided so much representation and connection should shut down during a time when we’re most isolated from each other.<br><br>While apps like Teleparty and Scener have closed the emotional distance in the meantime, they’re still not the real deal. After all, nothing is quite like the experience of being immersed in a story on the big screen in the dark, as if you’ve been transported into another world for a meager two hours.<br><br>Optimistically, not all hope for local films is lost as Cinema Centenario moves to an online platform called <a href=https://cinemacentenario.com/watch-moov/ target=_blank>MOOV</a>. I can still support everything that this film venue stood for by continuing to watch local movies from the comfort of my own home. Mourning Cinema Centenario should mean continuing what I frequented it for after all: <strong>Sharing the experience of Filipino film</strong>."
			],
	"common": [
		"Tiny, pretty things",
		"Common Room",
		"Therese Hipol", 
		"Before anything else, I have a confession to make: I have a nearly irresistible impulse to buy cute and admittedly useless—but still cute—things when I’m stressed, much like a coping mechanism. Coupled with the fact that I’ve been stressed since probably the day I was born, I now have a collection of bits and baubles I’ve amassed throughout the years. Enter Common Room: The source of the majority of my hoard of little toys and playthings. <br><br> I first discovered Common Room during a post-finals jaunt in my sophomore year of high school. Lured by the tiny, pretty things visible from the shop’s double glass doors, it was impossible for me to resist the promise of the silly trinkets I could buy. Knowing that I’d be supporting local independent artists through my purchases didn’t hurt my cause either. <br><br>After that first visit, I found myself coming back to its warm atmosphere and oddly specific scent—those of you who have been there will know what I’m talking about. Browsing through its shelves and walking up and down its concrete floors in an attempt to forget outside realities, even for just a moment, became a ritual that I grew to find comfort in. <br><br> Here was a shop that watched as I cycled through the highs and the lows of my life. Bright and dark days alike were reasons for me to drop by and find the next little thing to keep me occupied until I found another excuse to walk through its doors. Even on the rare occasion that I managed to walk out empty-handed—dramatic as it may sound—I would always find myself feeling lighter. It was almost as if I’d left my worries behind and buried them behind one of the racks, hidden by the things that gleamed and glittered whenever the light hit them the right way. <br><br> Here was a shop that witnessed my evolution from a shy high schooler clad in a tan blouse and a green skirt to a marginally less shy undergrad clothed in the first outfit pulled from my closet. For nearly six years, I marked the beginning of every Christmas season with a visit. I’d walk out of the doors with brown paper bags hanging from both arms, each stuffed with gifts for friends equally as passionate about the knick knacks that lined Common Room’s wooden shelves. <br><br> And here was a shop that served as a reminder that even at my lowest, there are things to be happy about and to be grateful for—no matter how tiny, pretty, or useless they can be. As I mourn Common Room’s death and the solace I found in its narrow aisles, I find myself nostalgic for simpler times but also hopeful for the future; even as a global pandemic and the glaring reality of my lack of post-graduation plans loom over me. <br><br> I guess this is goodbye, Common Room. Thank you for being my little retreat amidst the constant buzz and bustle of Katipunan."
			],
	"ministop": [
		"Those lonely nights",
		"Ministop",
		"Arnald Paguio", 
		"One thing’s for sure: If it weren’t for Ministop, I’d be a lot healthier. I’d be walking around with a lot less saturated fat, sugar, alcohol, and nicotine coursing through my veins. And as far as we’re only talking about things we consume, that’s as close a summary to the life of a student living in Katipunan one can get.<br><br>Speaking of poor life choices, Ministop would bear witness to a number of my reckless moments in college. The dimmed yet all-familiar yellow sign would always be the last thing I see before I headed up to my unit in Prince David after a night of heavy drinking or cramming. The white lights inside the establishment provided ample background lighting for the walks of shame up to my room. The later I got home, the larger the shadow my body cast on the floor as I hobbled towards the elevator; a fitting indicator of how shameful a night had been.<br><br>On numerous occasions, Ministop was the recipient—or enabler—of my folly. If McDonald’s was full on a Friday night, the fried chicken in Ministop was a worthy (and less expensive) substitute for any post-inebriation munchies. If all the bars were full, I’d simply pop over downstairs, grab half a liter of Red Horse, and carry on with the rest of my night. The store was the fuse to the typical night out, the safeguard from boredom in the bustling Katipunan night scene.<br><br>Those nights have stuck with me, much in the same way the stench of mold and reused oil sticks to my shirt any time I stayed inside the store longer than two minutes. Despite the countless crazy moments I’ve had in college, it’s quite telling how a plucky convenience store would hold its own for a place in my memories.<br><br>While not as refined an experience as studying in Starbucks, or as compelling as a drunken haze in VSpot or B55, there’s much to be said about those lone nights by feasting on meals that barely comply with my nutritional requirements.<br><br>Perhaps it’s because in those lone moments I didn’t have to assume any of the roles or facades I’ve developed for dealing with people of any sort. Those nights nursing a headache with food were always so liberating because with so much going on in college, it’s actually rare to have a quiet moment to yourself and just be. Over time, Ministop had acquainted itself with me, the real me.<br><br>While I could’ve shared this with any of the countless establishments along Katipunan, out of luck—or convenience—Ministop was there to witness the sides of myself I rarely expose. <br><br>So upon hearing about the store’s closure, it felt like certain truths about myself were closed down along with it because it was only in Ministop where those truths were ever revealed. I can only look back now with a heavy heart, one filled with nostalgia and grease, but a heart full nonetheless."
			],
	"myplace": [
		"Not too far from home",
		"MyPlace Residence Halls", 
		"Mikaela Llanes", 
		"Unlike many other Ateneans, uwian was never an option for me. <br><br> My province is approximately 90 kilometers away from Katipunan; if I wanted to go to Ateneo, then I would have to either get a condominium or stay in a dorm. I preferred the former, but my overprotective parents were never going to let that happen. <br><br> All it took was one weekend drive around Quezon City for my mother to decide that MyPlace Residence Halls was the best option. <br><br> MyPlace was strategically placed to be less than 10 minutes away from Ateneo (passing through Regis footbridge) and was also surrounded by a bunch of other establishments: Self-service laundry shops, family-run restaurants, 24/7 convenience stores. The dorm’s floors were segregated by gender and the security was strict; only family members were allowed in one’s room, and guests couldn’t stay in the lobby past a certain hour. (The open area—fondly referred to as the al fresco—was free game for anyone and everyone, though.) There were amenities, too, like a gym and a study area. <br><br> “You’ll never know,” I remember my mother telling me as I begrudgingly moved in. “Maybe it’ll feel like home. <br><br> The day after, I unwillingly attended the Dorm Life (D-Life) orientation: An overnight team-building of some sorts where you could meet fellow freshmen. The rest, from then on, was pretty much history. <br><br> I met my college barkada at D-Life; it gave me my first taste of the diversity you’d witness in college. All these people from different high schools and courses helped me shape my understanding of what the world was like beyond the small town I’d lived in most of my life. Eventually, they would set the scene for some of my best memories in college, with MyPlace as our backdrop. <br><br> You can imagine our collective devastation when we all woke up to the eviction email in May 2020. Due to “foregoing fortuitous events,” MyPlace announced that they were ceasing operations. Several group chats of mine erupted with the news, all of us worrying about where we would live post-pandemic or what would happen to the ates and kuyas we’d all gotten to know and love. <br><br> Above everything, though, we spent the day reminiscing. About the lazy starfish in the lobby aquarium that we doted on endlessly. About the tables in the al fresco that we spent so many evenings on, all of us gossiping and studying until the dead of the night. About the roommates and staff that we would never get to say a proper farewell to. <br><br> As I mentioned earlier, I would have never been able to survive uwian. It’s okay, though, because I realize now—after a year and a half in MyPlace—that my mother was right. It wasn’t that hard to make a home out of the dorm’s sprawling blue carpets and steel turnstiles. <br><br> Nowadays, my barkada and I laugh at all the times we hated the rules and curfews that “limited” us. For all it’s worth, I would go through all of it again if it meant I would get to spend one last night in the al fresco with my friends in the chairs next to mine. <br><br> We always knew MyPlace was meant to be a temporary stay—but it was never supposed to say goodbye before us."
			],
	"pancake": [
		"The old standby",
		"Pancake House",
		"Zoe Andin",
		"During on-site classes, I was usually happy with picking up food from my favorite Gonzaga stalls for those in-between class breaks. Dining out at a restaurant was meant for special moments like birthday celebrations, catching up with old friends, or a treat-yourself day after a particularly hellish exam season. Moments like those made me crave for the familiar warmth of comfort food. Enter Pancake House.<br><br>Among the Katipunan fare of busy bars and fast food, Pancake House was a place I found a strange sense of relaxation in. It wasn’t a place I frequented when I needed a quick meal; it was reserved for taking time out of my busy schedule to enjoy a meal in relative peace.<br><br>Pancake House was close enough to Ateneo that paying for a tricycle didn’t make sense, but far enough from the crowds of Pop-Up and Walrus that I wouldn’t have to pay attention to stepping into stray puddles of who-knows-what. The doors opened early for the days I happened to wake up in time for brunch dates with friends and stayed open late enough for after-class dinners with my parents.<br><br>It wasn’t just the convenience that I loved about Pancake House, though. I have always been a strong believer that a cure to a bad day is a good meal. Call me a sucker for nostalgia, but a childhood with Pancake House meals makes it a salve for the aches and pains college life would bring. I’m not much of a drinker so I would drown my sorrows in almondigas soup and pan fried chicken, coupled with good company. <br><br>A fond memory in Pancake House Katipunan was a meal I shared with a senior friend. Over a shared plate of spaghetti, he showed me who he gave his blue rose to, and passed me his graduation photo that had a smudged but loving dedication. I went to class that day with a full stomach and an even fuller heart.<br><br>Comfort food brought out meaningful conversations. It was in between bites of a taco salad that a friend told me how defeated she felt during the planning stages of a work event she was heading. I told an orgmate my plans to pursue an editorship while painstakingly filling every crevice of a waffle with syrup. My parents watched me submit a scholarship form while waiting for our dinner to be served.<br><br>A few days before I saw Pancake House Katipunan’s doors shuttered, I greeted that senior friend for his birthday, promising a Pancake House lunch “when this is all over.” We didn’t think that one of the many things the pandemic would take away would be the Pancake House my friends and I love dearly. Sure, the UP Town branch remains open (for now) but I know it won’t be the same. With the space Pancake House Katipunan once occupied now emptied, there is a place in my heart for the memories shared in those movie poster-covered walls."
			],
	"ricetop": [
		"The starving bowl-sized hole in my heart",
		"Rice Top", 
		"Patricia Villoria", 
		"Rice Top Fil-Asian Comfort Food has been a witness to so many of my favorite college memories. If I close my eyes, I can still picture its red neon sign, the wide window into the kitchen, and even the bottles of sauces and jars of chili oil. After years of eating there, it may actually be harder to imagine that all those things are gone.<br><br>It’s difficult to pin down exactly why the loss of Rice Top is so significant. For students like me who will graduate before the pandemic ends, it hurts to lose the final pieces of connection to our normal college lives one by one. Without Rice Top and all the iconic restaurants, cafés, and establishments that have welcomed us in all those years, is there even a reason for us to come back anymore?<br><br>Before the lockdown, the restaurant had been a rest stop for so many. After an early class in the morning, an afternoon of playing sports, or a really bad evening exam, the spot would be frequented by all kinds of people. Org mates and I also used to go there for food that steeled our stomachs before a night out. Everyone knew that a bowl of Beef Kebab or Tapa Tops was enough to prepare them for a round of fish bowls only a street away. And even when I had no plans, I learned that it was also nice just to have a meal and friends in the comfortable buzz of the space.<br><br>Which is why, as embarrassing as it is to say, I remember asking my sophomore year crush out to lunch there. Although it happened so long ago, I still remember the little details: The Orange Chicken I had, his own favorite Hainanese bowl, and the cheesy jokes we told each other that made things a little less awkward.<br><br>Two years since that day, we still laugh at the memory of our first lunch. Little did we know, it was only the first of many rice bowls we’d have together. That is why—to me—the place is a reminder of that girl who decided that she was done being torpe!<br><br>Looking back at all those memories, it becomes harder to accept that we have lost our proper closure to those unique college experiences. The abruptness of the end is so unfair; it feels like a robbery. I don’t think I’ve gotten used to each news of my favorite college spots closing down. In fact, I don’t think anyone has at all. <br><br>Perhaps the only consolation now is knowing that there is no other choice but to move forward. Time will pass and we all will make new memories in newer places that will, again, carve out a sentimental place in our hearts. It may not be in Katipunan but it will be special to us all the same.<br><br>Although the red neon sign, the window, and the food are long gone, it doesn’t mean our good memories of Rice Top have faded either. There will surely be times when my tired self will yearn for that familiar bowl of Orange Chicken after the pandemic is over. So while I wait for a replacement that will fill the starving bowl-sized hole in my heart, I can at least tell the people I’m with about the good times I had in that little restaurant along Rosa Alvero street."
			],
	"rooftop": [
		"Of bottles and buddies",
		"Rooftop",
		"Teo A. Ricaforte",
		"When I set foot in the Ateneo as a freshman, I was adamant on not going out at night to drink with friends. Truth be told, I somewhat regret not going to my block’s inuman sessions at the start of freshman year, but I believed opting out of drinking made me better than my friends. I looked down on it; getting wasted and making an embarrassment of myself was not my game plan for college. <br><br> It wasn’t until around October of that year when I got invited by my orgmates to go out drinking. It was my first college inuman, and having just befriended them after a gig we did—including a girl I had a crush on—I didn’t think twice. I just had to make sure I was back at my dorm before curfew hit, but I saw no other problem apart from that. <br><br> We started drinking at Taco Joe’s, but we then moved to Rooftop after. Just like everyone else, I initially didn’t want to go up four flights of stairs just to drink but I went anyway. The open air space, dangling light bulbs, and woven furniture were reminiscent of a house party that your friend with a condo would throw. There was much room to move around, which I liked because I was never one for rave spaces. If you were tired after going up the staircase, this setting is a nice reward for that exercise. Well, that and a drink. <br><br> The comfort is what drove me in, but it was the memories that kept me a few minutes past curfew (sorry to my parents). It’s where I got to show a few card tricks I learned and later forgot. It’s where I discovered I liked rum Coke and that I wasn’t mainly a beer person. It’s where I found out it was “buy one take one,” offered my crush the other drink, and got to talk and know more about her. It’s where I helped her bring our drunk friend to the ground floor restroom and since I couldn’t leave the building because I had a drink, I stayed by the door and had a chat with the bouncer. <br><br> Soon after that, I became more open to going out with my friends to drink. While I’ve been to several establishments across Katipunan, Rooftop still has a place in my heart as one of the places where I had my first inuman. I even got to drink with my orgmates once again at the end of that school year. This time, I felt a lot more comfortable because I felt at home with them. While I am no longer a part of that org, getting to bond with my then-orgmates at those times was something I don’t regret at all. <br><br> I’m adamant on not getting drunk in public, where mistakes can be made an accidental spectacle. But for going out to drink, that’s a different story now. That night at Rooftop was where I learned that drinking wasn’t mainly a thing where all you’d do is guzzle down alcohol like there’s no tomorrow. It’s a time for hanging out with friends, perhaps meeting some new ones, and just forgetting about the stresses of school for a night. <br><br> Rooftop’s gone now, and the news of their closing was the first closing that made me genuinely sad. No more chances of being able to enjoy the cool breeze of the outdoors (despite the cigarette smoke) or the ambiance that made conversations with friends nicer. When this pandemic subsides, I hope others find the bar that would give them a feeling of fun and comfort, much like Rooftop did for me. I just hope they don’t have to climb four flights of stairs to get there."
			],
	"yellow": [
		"Balconies and boxes",
		"Yellow Box Rice Company" ,
		"Justin Ginete",
		"I'm something of what I’d like to call a Matteo Up hermit. I’ve spent countless hours on the balcony; smelling the crisp smell of the Ateneo night air, burning through the reams of paper that constitute my readings. I go home at midnight and I repeat the same thing again the next day.<br><br>It was a routine, and I liked my routines.<br><br>There was one thing, though, that stood out in the almost gloomy atmosphere of the balconies at night, and it was the ever-present bright yellow boxes of the aptly named Yellow Box Rice Company. You’d see one of these boxes at almost every other table and once I found out what restaurant it was from, I tried it out. Before I knew it, I found myself ordering one if I was too lazy to walk someplace to get some food. It became my personal tradition.<br><br>You see, I live for these constants in my life. There was a weird, comforting feeling, whenever I ordered one of these almost every night to accompany me as I caught up on my org work or academic requirements. It didn’t matter if I was working alone, on a study date with one of my friends, or spending the night cramming with some of my group mates; I could always count on Yellow Box to be one call away. A night at the balcony without my favorite beef salpicao just isn’t the same.<br><br>This is where I learned that people attach their most cherished memories to the most random things. Some people get misty-eyed at the sound of the Ateneo bell (and I don’t blame them) and I get weirdly nostalgic just thinking about these yellow boxes. It’s not much, but we’ve been through a lot together; from As and Ds, to heartbreaks and successful org projects. There was a box for every occasion. <br><br>This year, I couldn’t do any of that stuck in front of my computer in my bedroom. When I first heard of Yellow Box <a href=https://www.facebook.com/yellowboxricecompany/posts/919246605210621 target=_blank>\“temporarily\”</a> closing down, I was still praying that things would have been normal by the time the second semester came along. I wanted a chance to get back to my old routines. It’s a lot to ask, but there’s nothing I would have wanted nothing more than to be back on campus, cramming at Matteo Up—with my thesis mates and the comfort of Yellow Box meals.<br><br>I’d like to think that there’s an alternate universe out there where I’m pulling all-nighter back at the balcony with my closest friends; procrastinating, telling stories, reminiscing about the years that have gone by.<br><br>This year has broken almost every single one of our favorite routines. Although my habits have changed, I’m forever grateful for the constancy that Yellow Box offered; the kind of constancy I honestly took for granted. <br><br>So, Yellow Box Rice Company—thank you. You made all those nights a bit more bearable for me and a lot of my fellow Matteo Up hermits.<br><br>Here’s to hoping that I get to come back to you someday."
			]
}

// Switch for mobile/desktop
if (matchMedia) {
  const mq = window.matchMedia("(max-width: 500px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
	mobile = true;

  } else {
    mobile = false;

  }

}

// Adding functions to each sticker
stickers.forEach((sticker, index) => {
	// Hover function for sticker
     $(document).on('mouseover', '#'+sticker, function(){
     	if(!mobile){
					var elem = document.getElementById(sticker);
					var bBox = elem.getBBox();

					$(this).attr("transform", "scale(" + scaleX + ", " + scaleY + ") "
								+ "translate(" + (1 - scaleX)*(bBox.width/2) + "," + (1 - scaleY)*(bBox.height/2) + ")");


					this.parentNode.appendChild(this);

					hover = true;
					show('.tint');
				}
     });
     // Leave hover function for sticker
     $(document).on('mouseleave', '#'+sticker, function() {
	    if(!mobile){
					var scroll = $(window).scrollTop();
				hover = false;
				if(!letter && !env){
					hide('.tint');
				}

				$(this).attr("transform", "scale(1, 1) "
					+ "translate(0, 0)");

				this.parentNode.prepend(this);
				}
	  });

     // Click sticker
     $(document).on("click","#" + sticker,function() {
     	letter = true;
     	current = index;
     	$('body').addClass('fix');
     	hide('.d-footer');

     	show('.tint');
     	show('#letter');

     	$("#letter").scrollTop(0)

		$(".polaroid").html('<img class="pol-m" alt="' + sticker +  '" src="components/polaroids/mobile/' + sticker + '.webp"><img class="pol-d" alt="' + sticker +  '" src="components/polaroids/desktop/' + sticker + '.webp">')
		$(".scroll-name").html(locations[sticker][1])
     	if(mobile){
     		$(".title").html(locations[sticker][0] + ": <br>" + locations[sticker][1])
     	}
     	else{
     		$(".title").html(locations[sticker][0] + ": " + locations[sticker][1])
     	}
     	$(".author").html("By <strong>" + locations[sticker][2] + "</strong>")
     	$(".body").html(locations[sticker][3])
     });

 });


// Close function
$(".close").click(function(){
	letter = false;
	hover = false;
	$('body').removeClass('fix');
	show('.d-footer');

	hide('#letter');
	hide('.tint');
});
$(".tint").click(function(){
	if(letter){
		letter = false;
		hover = false;
		$('body').removeClass('fix');
		show('.d-footer');

		hide('#letter');
		hide('.tint');
	}
})

// Left scroll function
$(".left").click(function(){
	if(current < 1){
		current = stickers.length-1;
	}
	else{
		current -= 1;
	}
	$(".polaroid").html('<img class="pol-m" alt="' + stickers[current] +  '" src="components/polaroids/mobile/' + stickers[current] + '.webp"><img class="pol-d" alt="' + stickers[current] +  '" src="components/polaroids/desktop/' + stickers[current] + '.webp">')
	$(".scroll-name").html(locations[stickers[current]][1])
	if(mobile){
     		$(".title").html(locations[stickers[current]][0] + ": <br>" + locations[stickers[current]][1])
     	}
 	else{
 		$(".title").html(locations[stickers[current]][0] + ": " + locations[stickers[current]][1])
 	}
 	$(".author").html("By <strong>" + locations[stickers[current]][2] + "</strong>")
 	$(".body").html(locations[stickers[current]][3])

 	$("#letter").scrollTop(0)


});

// Right scroll function
$(".right").click(function(){
	if(current >= stickers.length-1){
		current = 0;
	}
	else{
		current += 1;
	}

	$(".polaroid").html('<img class="pol-m" alt="' + stickers[current] +  '" src="components/polaroids/mobile/' + stickers[current] + '.webp"><img class="pol-d" alt="' + stickers[current] +  '" src="components/polaroids/desktop/' + stickers[current] + '.webp">')
	$(".scroll-name").html(locations[stickers[current]][1])

	if(mobile){
     		$(".title").html(locations[stickers[current]][0] + ": <br>" + locations[stickers[current]][1])
     	}
 	else{
 		$(".title").html(locations[stickers[current]][0] + ": " + locations[stickers[current]][1])
 	}
 	$(".author").html("By <strong>" + locations[stickers[current]][2] + "</strong>")
 	$(".body").html(locations[stickers[current]][3])

 	$("#letter").scrollTop(0)
});

// Scroll to top on reload
$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});


// Preload
function preloadImages() {
   $('#hiddenImages').appendTo('body');
   for(var i = 0; i < stickers.length; i++) {
      $('<img />').attr({ src: 'components/polaroids/desktop/' + stickers[i] + '.webp', alt: stickers[i] }).appendTo('#hiddenImages').hide();
      $('<img />').attr({ src: 'components/polaroids/mobile/' + stickers[i] + '.webp', alt: stickers[i] }).appendTo('#hiddenImages').hide();
   }
}
$(document).ready(preloadImages());

// Loading screen
$(window).on("load", function (){
	$('.load').fadeOut()
});

// Open/close letter on wheel event
$(window).on('mousewheel', function(event){
	var scroll = $(window).scrollTop()
	if (event.originalEvent.wheelDelta /120 > 0 && scroll <= 0 && !letter){
		env = true;
		show('.tint')
		show('#envelope')
		hide('.footer')
	}
	else if (event.originalEvent.wheelDelta /120 < 0 && !hover && !letter){
		env = false;
		hide('.tint')
		hide('#envelope')
		show('.footer')
	}
});


// Touch scroll event
var ts;
$(document).on('touchstart', function(e) {
    ts = e.originalEvent.touches[0].clientY;
});

$(document).on('touchmove', function(e) {
    var te = e.originalEvent.changedTouches[0].clientY;
    var scroll = $(window).scrollTop()
    // down
    if (ts > te && !hover && !letter) {
        env = false;
		hide('.tint')
		hide('#envelope')
		show('.footer')
	// up
    } else if (ts < te && scroll <= 0 && !letter){
        env = true;
		show('.tint')
		show('#envelope')
		hide('.footer')
    }
});

// Hide element
function hide(element){
	$(element).removeClass('visible');
	$(element).addClass('hide');
};

// Show element
function show(element){
	$(element).removeClass('hide');
	$(element).addClass('visible');
}
