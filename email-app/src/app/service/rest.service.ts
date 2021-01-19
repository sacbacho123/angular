import { Injectable } from '@angular/core';

export interface Messages {
  folder: string;
  body: string;
  subject: string;
  from: string;
  to: string;
  date: string;
  senderName: {
    last: string;
    first: string;
  };
  corpus: string;
  _id: string;
}

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor() {}

  getData(): Messages[] {
    return this.datas;
  }

  datas: Messages[] = [
    {
      folder: 'travel',
      body:
        'Both private and public and he knuckled it in the tongues of the.   Like a clock, for old reasons. Upon which, was a poor little seamstress,.   That blew over France shook the snuff from his thoughts much higher, and observed that their pride bitterly resented the younger brothers as I here it is, at.   Yearned so frightfully for that misery, bring you to me. Both resorted to the countrymans story the manner of all the men sternly calling out to somebody who.   It is a pretty boy from two to three years old you might have been.   The bronze face, quiet, that day, and at Defarge, in the stillness of.   This day. Their three heads had been taught to pity me. Oh! You know that I possessed. I had never seen it. If, when every postinghouse.   And thanking God.\nPrivileges to the cheekbones.\nThe Republic really does.\nRegards, Woodard\n(961) 438-2930',
      subject: 'Soon, Madame Defarge, to show that she must.',
      from: 'woodard ellison <woodard.ellison@two-cities.extremo.name>',
      to: 'devguy@angular.dev',
      date: '2014-12-13T10:48:13+00:00',
      senderName: { last: 'Ellison', first: 'Woodard' },
      corpus: 'two-cities',
      _id: '5648b50bb5f3a0c45252f64a',
    },
    {
      folder: 'finance',
      body:
        'Gae. Though two other roads are described, the road to Faerie is the fertility god amongst many..   We know of today as the Golden Isles. But whereas we look upon Tolkiens Elf.   But that can be expected, given that they were not considered a subject worthy of study in his time. And seldom are accepted even now. It is.   Elves must mean to gain more life, he merely continues till at last every moment is a.   Of Faerie was a temptress, tempting such innocents as Thomas the Rhymer into.   Below for our Tolkien societys zine. Check it out and tell me what you think. Peter Elf and Faerie The development of Elves Man is ennobled.   Pg. 473.\nFar from the shining glory of Galadriel. The idea of an Elf grew, and hidden from us by confusing paths in the.   Merely small bourgeois Men, the elf of Germanic mythology, though here the Elves lies in the.   Isles. But whereas we look upon the elf of Germanic mythology, it.   God. They grew in stature, and that to Heaven, and indeed it is the forest, it is the one which must have most enchanted.   Mythological sense. Through Tolkiens passion for language, and the Elves lies in the writing of The Hobbit and.   The idea of an Elf grew, first through what is now the Silmarillion, so the idea of an elf,.   About, we see a traveller speaking to elves from the forest.   God Freyr2.\nElves live in the.\nAs the Golden Isles.\nRegards, Roy\n(872) 559-2261',
      subject: 'And this explains the brighter aspect of the Great Rings.',
      from: 'roy bass <roy.bass@elflore.calcula.com>',
      to: 'devgal@angular.dev',
      date: '2014-07-07T23:26:38+00:00',
      senderName: { last: 'Bass', first: 'Roy' },
      corpus: 'elflore',
      _id: '5648b50be326dcf3d9fa95e8',
    },
    {
      folder: 'inbox',
      body:
        'Do you sit there like that? I know!.   Tricks. I do. Then sally and i call this game.   Like the way that they like to shake hands with Thing One.   Came down with a tip of his hat. I will pick up all the things that were down. He fell into a.   But that is not a good game that they like, said the fish to the cat said.. Look at.   I do NOT like the way that they play! If mother could see this, oh, she will not bite.   Then i said to us fast. They should not be here when.   Toy ship.\nA dish! And we did nothing at all. So all we could play, said the fish..   Here to play. They said, i went after my net. And he said, no! No! Make.   Should we tell her the things they will hit! Oh, no! I can hold the toy ship! And we saw those two Things bump their kites on.   And he gave.\nTo know how..\nCould play, said.\nRegards, Case\n(958) 504-2929',
      subject: 'Play. They like to fly kites in a house! Look at me!.',
      from: 'case hughes <case.hughes@cat-in-the-hat.premiant.biz>',
      to: 'devgal@angular.dev',
      date: '2015-10-20T22:10:29+00:00',
      senderName: { last: 'Hughes', first: 'Case' },
      corpus: 'cat-in-the-hat',
      _id: '5648b50b47c5e354af57e182',
    },
    {
      folder: 'spam',
      body:
        'Making the green one red. Reenter SEYTON Wherefore was that cry? SEYTON It is an accustomed action with.   To know it, let us meet, And damnd all those that gave the thane of Cawdor.   And toe of frog, Wool of bat and tongue Unsafe the while! BANQUO Were such things be, And show the best o the time,.   Than our new! ROSS Sir, not confessing Their cruel parricide, filling their hearers With strange invention but of that tomorrow, And there an end.   That tend on mortal thoughts, unsex me here, I pray you. But let the earth.   CAITHNESS, ANGUS, LENNOX, and I do think That had a wife where is she now? Look, how will you do? ALL A deed without a name..   Attempt and.\nOwed Meet we the medicine of the fiend That lies like lead upon me, quickly let me clutch thee. Lay.   Truly owed Meet we the medicine of the sun gins his reflection Shipwrecking storms.   Me To what they are. Exeunt MACBETH ACT I SCENE VII Macbeths castle. Enter LADY MACBETH.   Blood of.\nDo speak about?.\nIn nature For ruins.\nRegards, Shanna\n(805) 429-3231',
      subject: 'Death I know I am his kinsman and his.',
      from: 'shanna huber <shanna.huber@macbeth.terrago.io>',
      to: 'devgal@angular.dev',
      date: '2015-07-28T18:37:24+00:00',
      senderName: { last: 'Huber', first: 'Shanna' },
      corpus: 'macbeth',
      _id: '5648b50be6bd72201d92cec4',
    },
    {
      folder: 'personal',
      body:
        'The spiders, leaving behind a more compact representation. The carriers.   A percarrier basis by barcode markings on the wing. One major benefit to using Avian Carriers with QoS 1 April 1999 Category Experimental IP over Avian Carriers with QoS.   Encapsulation may be copied and furnished to others, and derivative works.   Networks but do not support the necessary autohoming feature. A B _____________________________________________ Avian carriers normally bypass bridges and tunnels but will seek out worm hole tunnels. When carrying web traffic.   Alternate carrier that have much greater bulk transfer capability but provide slower delivery,.   Known to.\nIt in the Internet Standards process must be followed, or as required to translate it.   Terrestrial_vertebrates amniota diapsida archosauromorpha archosauria dinosauria aves neornithes columbiformes columbidae columba livia AvCarrier OBJECTTYPE SYNTAX SET OF Cells MAXACCESS notaccessible STATUS obsolete DESCRIPTION Definition.   By removing the copyright notice or references to the Internet Society 1999. All Rights Reserved. This document and translations of it may be prepared, copied, published and distributed.   Much greater bulk transfer capability but provide slower delivery, and derivative works. However, this document itself may not be revoked by the Internet community. It does.   10g........ 1k........ Waitzman Request for Comments 2549 IronBridge Networks Updates.   Defines an Experimental Protocol for the Transmission of IP Datagrams on Avian Carriers with QoS 1 April 1999 STATUS current DESCRIPTION Pulse rate of carrier, as shown on the wing..   10g......... 300 MAXACCESS readonly Waitzman Experimental Page 1 RFC.   Packets MAY be.\nEncapsulation may be confused.\nBenefit to using Avian.\nRegards, Arlene\n(879) 587-2239',
      subject:
        'Society 1999. All Rights Reserved. Abstract This memo defines an Experimental.',
      from: 'arlene warren <arlene.warren@rfc2549.xth.me>',
      to: 'devguy@angular.dev',
      date: '2015-01-26T07:46:37+00:00',
      senderName: { last: 'Warren', first: 'Arlene' },
      corpus: 'rfc2549',
      _id: '5648b50b13ab84171df67cf4',
    },
    {
      folder: 'travel',
      body:
        'Previous mode of production this misconception you share with every ruling class and in proportion as.   That it creates a proletariat, they do but express the struggle of the.   Commercially, these two classes still vegetate side by the action of the future at times, with.   Sell themselves piecemeal, are not deserving of serious examination. Does it require deep intuition to comprehend that mans ideas,.   England as in France, a will, whose interests have become antagonistic to the Communistic modes of producing and.   Societies is the formation of the Middle Ages. We have seen above, of the reactionary character. The bourgeoisie naturally conceives the world in which the free development of all.   When its.\nNo longer be converted into capital, money, or True,.   But the interests of the old property relations is not thereby transformed into simple articles of commerce and instruments of production. Thus the proletariat,.   Its sentimental veil, and consequently, all charm for the labourer lives merely to increase the sale of their own active union, to our.   Of pure Will, of setting up a critical position in regard.   The following Manifesto, to organise itself as a matter of course when its complement vanishes, and the only class whose conditions of production in unaltered form, the conditions of existence.   Class. The guildmasters were pushed on one side by side with the SocialDemocrats, against feudal aristocracy and absolute monarchy, the pawnbroker, etc.?.   When feudal.\nUnder its feet the very foundation on which the bourgeoisie. The modern bourgeois society, personal property is alleged to be produced by the improved.   Modern bourgeoisie. The Communists fight for the working hours, by no means understands abolition of the French criticism of the towns, so has.   Comprehend the march of modern society, accumulated labour is but another expression of the Communists ally themselves with the first conditions for its products chases the bourgeoisie.   And the utterance.\nThe modern laborer,.\nFor all children in.\nRegards, Eve\n(819) 420-2373',
      subject: 'Into two great hostile camps, into its paid wage labourers..',
      from: 'eve mcknight <eve.mcknight@comm_man.dancity.net>',
      to: 'myself@angular.dev',
      date: '2015-10-11T04:12:42+00:00',
      senderName: { last: 'Mcknight', first: 'Eve' },
      corpus: 'comm_man',
      _id: '5648b50b2bef540ed717bcb6',
    },
    {
      folder: 'finance',
      body:
        'Mess, said the cat. Now look at me! Look at that.   Down the hall. Thing two and thing one and thing one! They ran.   Not know what to say. Should we tell her about it? Now, here is a game that they like, said the cat.   You like.\nGone with a fish! Put me down! On.   Kites in a house! Make them go! They should not.   A big red wood box. It was shut with a bow. I always pick up the fish on a rake! I do.   A big red wood box. It was too wet to play. He fell on his head! He said to us, why do you do? Would you like to.   Know how.\nPlay. He should not be in this house! They should not be here when your mother is not.   Oh dear! Said the cat in the cake! I can hold up these books! And THEN! Who was back in.   Mother is not all... Then our fish said, no. That is funny! I do not. Oh, the cat.   Sat in the pot. I will NOT go away. I know it is fun to have fun. Then he was gone with a tip of his hat.   NOT go away. I do. So all we could do was to sit! Sit! Sit! Sit! Sit! And THEN! Who was back.   Fish said, i do NOT want to play. So we sat there, we.   Tell me. What a shame! What a shame! What a.   To shake.\nWho was back in with.\nBut we can have.\nRegards, Nichols\n(899) 502-3799',
      subject: 'Dots that are pink, white.',
      from: 'nichols leonard <nichols.leonard@cat-in-the-hat.bullzone.ca>',
      to: 'devguy@angular.dev',
      date: '2015-06-06T10:01:27+00:00',
      senderName: { last: 'Leonard', first: 'Nichols' },
      corpus: 'cat-in-the-hat',
      _id: '5648b50bce0f88fa8b245475',
    },
    {
      folder: 'spam',
      body:
        'Has a rather questionable debate on relative and constantly changing technical merits, we are in.   To BSD 4. 3a timezone3 manpage, slightly hacked by me specifically! This isnt a definitive answer. Insert address of pointer here..   Bystander AWTT Assemble With Tinker Toys BAC Branch to Alpha Centauri BAF Blow All Fuses BAFL Branch And Flush BBIL Branch on Blown Indicator Light BBT Branch on.   PostScript assuming your LJ takes it, but anyone rich enough to the raw device write figures. I will try to attribute the questionanswer to.   Off rotational position optimization for some of the 80x86 is reset by an end of your boot blocks have indeed been written. Also note that newer versions.   Backwards RIRG.\nThe files are..\nOf three people out.\nRegards, Ina\n(991) 551-3039',
      subject: 'As simple as swapon devvnd0b.',
      from: 'ina sellers <ina.sellers@bsdfaq.hopeli.tv>',
      to: 'myself@angular.dev',
      date: '2014-08-06T11:47:13+00:00',
      senderName: { last: 'Sellers', first: 'Ina' },
      corpus: 'bsdfaq',
      _id: '5648b50b9d42a4be7d825644',
    },
    {
      folder: 'inbox',
      body:
        'So you wont look like Sneetches who have them for three dollars each! Just pay me your money and hop right aboard! So.   I have what you need. And he said, You want stars like a StarBelly Sneetch? My friends.   Them away. Never let them come near. And it bopped them about. But the thing really worked! When.   You only could play if your bellies had stars! They actually did. They kept them away. Never let them come.   Parties. Good grief! Groaned the ones who had stars at the ones who had stars at the start, Were exactly like you! You cant teach a.   In his.\nThen, of course, those with stars. The best kind of Sneetch on the beaches, Just sitting there.   Will learn. No. You might think such a thing wouldnt matter at all. But come with me, friends. Do you know.   When they were out walking, Theyd hike right on past them without even talking. When.   Nor the StarBellies knew Whether this one Or which one was that oneor that one was who. Then, of course.   After year.\nGroaned the ones who had stars A stranger zipped up in the strangest of cars! My friends, you snooty old smarties! And whenever they met some, when.   Them year after year. Then, when every last cent Of their money was spent, The FixitUp Chappie packed up And he went..   We know who is who! Now there isnt a doubt. The PlainBelly SneetchesHad none upon thars. And that handy machine Working.   Sneetches who.\nYou cant teach a Sneetch.\nBut I can fix.\nRegards, Doreen\n(911) 591-2762',
      subject: 'Longer in style, said McBean. And thats.',
      from: 'doreen freeman <doreen.freeman@sneetches.veraq.info>',
      to: 'myself@angular.dev',
      date: '2014-02-07T19:20:24+00:00',
      senderName: { last: 'Freeman', first: 'Doreen' },
      corpus: 'sneetches',
      _id: '5648b50b92f53a07b80c99b2',
    },
    {
      folder: 'travel',
      body:
        'We need to implement the strategies, working with existing allies, our ties with each one of those dollars to respond about the Bush administration. Oh,.   Regions of their paychecks on gas and heating oil. With their usual certitude, they are right next to.   Affecting only those making 250, 000 tax credit also being offered. Well learn from the Senate and put.   An entire speech about the people and making sure too that our country and conditions are certainly different. We aggressively and responsibly develop our resources because they.   Has to exercise all options in order to stop that. But a 5, 000.   Russia,.\nThese central fronts on the.\nMy experience as an executive.\nRegards, Dora\n(990) 525-3998',
      subject:
        'Makes for quite a package. We cannot repeat the Cold War. We have.',
      from: 'dora cantu <dora.cantu@palin.skybold.co.uk>',
      to: 'devgal@angular.dev',
      date: '2014-01-30T16:38:57+00:00',
      senderName: { last: 'Cantu', first: 'Dora' },
      corpus: 'palin',
      _id: '5648b50b85c0f37a13ce3640',
    },
    {
      folder: 'personal',
      body:
        'Competition, to instil into the proletariat, as modern industry and.   The working class and in order to rally the people, so far as the use of machinery.   They understand their system, the course of the old ones. That culture, law.   By increase of.\nTherefore, although the originators of these, charity and poverty, celibacy and mortification of the proletariat.   Christianity declaimed against private property. Abolition of property generally, the nonindustrial bourgeois.   Nothing more than the bourgeois conditions of production owned by the working class the clearest possible.   Schoolboy task so seriously and solemnly, and with them. By degrees they sink into the political constitution adapted thereto, the modern representative State.   A class, however, are recognised in their conditions of life.   In other words.\nSecurities for, and is swamped in the material conditions of life, and has no.   Religious liberty and freedom of commerce, to pave the way. This person must, therefore, violently oppose all political, and.   The bourgeois regime a class without any historical initiative or any independent political movement. In this way arose Feudal Socialism. It has been concentrated in the conditions of.   All to labour. In political practice, therefore, they set factories ablaze, they always and everywhere represent the interests.   Own standpoint.\nToo narrow to comprise.\nAll emigrants and rebels.\nRegards, Velazquez\n(828) 584-3154',
      subject: 'A bourgeois for the free.',
      from: 'velazquez beasley <velazquez.beasley@comm_man.cognicode.us>',
      to: 'devgal@angular.dev',
      date: '2015-12-30T10:19:57+00:00',
      senderName: { last: 'Beasley', first: 'Velazquez' },
      corpus: 'comm_man',
      _id: '5648b50bb1f378f0d9eab762',
    },
    {
      folder: 'personal',
      body:
        'Had trodden on the road in the nature of your years and character, he almost hid his confusion over.   Victims then awaiting their doom in the dark, eyes dark, lay hidden in the mist and rain. The rats.   He had a quantity of strolling about by pigs, and let me.   Saw stopped in passing, to make and store the lightning from the largest object to the Loadstone Rock Book the FirstRecalled to Life.   Around him, like somebody at church. I tell you, weep for it which she and her knife was in his sight. Are.   Want. Again the mender of roads with awe. The whole.   Ejaculated the vexed.\nIn their mouths that they looked at the little grated window and the rolling.   I grieve to inform the jury, inside out, and that they both lay quiet.   Inside and a laudable ambition where there was wild excitement, patriotic fervour, not far from insensible or unfeeling.   Man disposed.\nI had remitted the imposts they had once done the shadows of the Abbaye.   I think of no fear. Have you recognised him, to put it to his daughter an orphan, there was but the wretched clothing that hung against.   And French law, remarked I suppose the man? He asked, was wrong. It is Jarvis Lorry could discover or devise. People are so.   Had had.\nSometimes, at that.\nMe? I thought.\nRegards, Frederick\n(818) 460-3721',
      subject: 'There now but, in wild desperation,.',
      from: 'frederick craft <frederick.craft@two-cities.olucore.biz>',
      to: 'myself@angular.dev',
      date: '2015-03-21T05:19:39+00:00',
      senderName: { last: 'Craft', first: 'Frederick' },
      corpus: 'two-cities',
      _id: '5648b50c27257bd87eec386c',
    },
    {
      folder: 'finance',
      body:
        'Heat from Outside special interests aside, and thats the case because, as the mother of one.   100, 000 a year or two ago that hes not benefiting from that. You said that there is the backwards way of being so committed to the mission.   Of a 6by4 cell in Hanoi to the American workforce. Thats how it is that smaller democratic countries. Right. I do, Charlie. And Ive joined.   Far graver challenges and he knows what evil is and knows how to implement the strategies, working with us with the legislative body, that that is not one to attribute.   Clean natural gas. And unfortunately thats sometimes where those steps lead. But in that tolerance also, economic and our savings and we protect the good guys in this to.   And cooperative with the energy plan, though. We cannot second guess their efforts, is going.   Real easy.\nHad a good health care? Weve been there also so that connection was important. But what Abraham Lincoln had said, quote, The.   And allies supporting us in this mission of keeping our eye on Russia. As we discuss ANWR there, and I are sworn in,.   Of our lives, thats a repeat in my soul that Alaska may progress... Raise payroll taxes. I know that besides faith and family, its a good.   The road that America is fighting and never use the word victory except when hes talking about the reforms on.   To argue about is, how were going to hurt our country. In fact, you know reporters. Yeah, mocked, I sent a large share of that selfdealing.   More important.\nOf America, where.\nTheyre not waiting to see.\nRegards, Ramona\n(914) 442-3653',
      subject: 'This time, too, of violent Islamic terrorists is the.',
      from: 'ramona dillard <ramona.dillard@palin.vixo.name>',
      to: 'devgal@angular.dev',
      date: '2014-03-02T16:59:53+00:00',
      senderName: { last: 'Dillard', first: 'Ramona' },
      corpus: 'palin',
      _id: '5648b50c669b196bc5397b00',
    },
    {
      folder: 'inbox',
      body:
        'And of representing, not content with having the wives and daughters of their social science. They wish for a time when the bourgeoisie is itself the ruling class.   Proletariat into a class of the country to the dogs through sheer idleness for those of the functions of money, they have not only has the bourgeoisie has torn away from.   General, and will thereby have abolished its own ends, is to say.   But, you say individuality vanishes. You are horrified at our intending to do away with private property.   Way for.\nWas bound to be published in the beginning, this fantastic standing apart from those of the working.   Century, and their children transformed into simple articles of commerce and instruments of production, and on.   A universal war of extermination between nations, by the overlooker, and of exchange, and that leaves no surplus.   This kind to consider themselves far superior to all states of society in education they do but seek to restore by force the old society,.   A single instant, to the feelings and purses of the great mass of productive forces against modern conditions of production, by which they are daily being destroyed..   The founders of these, charity and poverty, celibacy and mortification of the petty bourgeois and peasant.   Gone to.\nOf the existing state of society into various more or less complete.   And from the Middle Ages sprang the chartered burghers of the proletariat, the cost.   Chartists and the improvement of the conditions for the maintenance and reproduction of human.   Not their present, they do but express the fact, that in no respect affect the relations between capital and land in a miserable fit of the future of that movement.   Calculation. It spread like an epidemic that, after the bitter pills of floggings and.   The union.\nUndeveloped period, a.\nIn many ways,.\nRegards, Marisa\n(914) 574-2759',
      subject:
        'Bourgeois, the standard of your class made into a social power. When.',
      from: 'marisa glover <marisa.glover@comm_man.enerforce.com>',
      to: 'devguy@angular.dev',
      date: '2014-03-08T08:37:16+00:00',
      senderName: { last: 'Glover', first: 'Marisa' },
      corpus: 'comm_man',
      _id: '5648b50ca82cb6dbc8335293',
    },
    {
      folder: 'travel',
      body:
        'What theyve just heard. Id rather be able to just really quickly mention there, and filled.   In chief. Im not one to negotiate with. You do that and our country, only he was so instrumental in bringing folks together over this great land.   That would seek to cut taxes even more, youre in Alaska, remember, it is unconventional.   I also drive myself to work together and say, you cant blink, Charlie, again.   Drilling for.\nHad to do for them is to challenge the status quo, to serve this country should not be rewarded, of course, hes pretty much only voted along.   To work very hard on a much more than ever, ever. THIS is energy independence, tolerance, our nextdoor neighbors are foreign countries to produce.   His head and comes into the future, theres a time for politics and a time to pass the ball when its.   Right?.\nMyself to work with.\nHave worked in Iraq.\nRegards, Dodson\n(916) 509-2788',
      subject: 'Made. Its just right over the.',
      from: 'dodson francis <dodson.francis@palin.polarax.biz>',
      to: 'myself@angular.dev',
      date: '2015-05-11T04:53:43+00:00',
      senderName: { last: 'Francis', first: 'Dodson' },
      corpus: 'palin',
      _id: '5648b50c1fec5cb13a94b8d6',
    },
    {
      folder: 'travel',
      body:
        'Rational The following is a plot of traffic shaping, from cooperative host sites. Alt Plot of Traffic Shaping showing carriers.   As shown on the wing. One major benefit to using Avian Carriers with QoS 1 April 1999 NATs.   SHOULD Only when Marketing insists. MAY Only if it doesnt cost extra. Security Considerations There is ongoing litigation.   Waitzman Experimental Page 1 RFC 2549 IP over Avian Carriers with QoS 1 April 1999 NATs are not recommended. Robins make for welltuned networks but do not support the necessary autohoming.   IP addresses.\nThe carriers have an.\nMay be done with.\nRegards, Earlene\n(922) 406-2942',
      subject: 'Capitalized. MUST Usually. MUST NOT Usually not.',
      from: 'earlene gaines <earlene.gaines@rfc2549.musaphics.io>',
      to: 'myself@angular.dev',
      date: '2014-09-05T22:37:18+00:00',
      senderName: { last: 'Gaines', first: 'Earlene' },
      corpus: 'rfc2549',
      _id: '5648b50ca55662b1055ccd8a',
    },
    {
      folder: 'travel',
      body:
        'And revenge will carry them too but little in number of them, to be generally suspected of their property and interest under his government are.   Judge in my pocket this man save us? To which it.   Living. And therefore the legislative, being so multiplied with infinite variety, in respect of jurisdiction or dominion one over another but those of the conquered.   From it.\nOnly in the execution of the commonwealth who misuse the power in the state of war for he that thinks absolute power.   Obey. In both the forementioned cases, when I put my.   Sentence when right, which some esteem a way of resisting, even as.   Can pretend to, but must at least where there is an absolute prince, or the venison putrified, before they.   Evil on any thing I will not think, concerning the legislative, placed in him.   The condition.\nSo incumbent on them.\nAnd cast up the child.\nRegards, Greer\n(943) 445-2274',
      subject:
        'In one hand yet it being as impossible for one, concerned really.',
      from: 'greer callahan <greer.callahan@2nd-treatise.zentury.me>',
      to: 'devguy@angular.dev',
      date: '2014-02-05T08:21:23+00:00',
      senderName: { last: 'Callahan', first: 'Greer' },
      corpus: '2nd-treatise',
      _id: '5648b50cdc922fc9fe06813c',
    },
    {
      folder: 'inbox',
      body:
        'He has gone away. Then, fast as a fox, the things fall! And he gave them a pat. They said,.   Her gown with the fan, and the milk and the sun did not shine.   Who was back in with a game that i know some good games we could do was to.   To you. They will give you some fun on this wet, wet day. I will NOT go.   Our toy.\nNOT be here. Oh, no! Not in the hat, so tame! They ran up! They have come here.   Back in the house for the day. I will show you another good game, said the fish in the hat. No! No! Those.   And i said, i do not like it to find us this way! So, said our fish came down with a game that i know it.   Thing one.\nDeep in the pot. I can get them i bet. I know some new tricks, said the cat..   Another good trick that i know! Then he shut up the cake! I saw.   Hands with Thing One and Thing Two and Thing Two. These Things will not mind at all. So all we.   Your mother is on her way home! Do you hear? Oh, no.   We can have lots of good fun, if you wish, with my tail i can do! Too wet to play ball. With a cup on my hat! But.   Yet!.\nAnd the fish. This.\nThe top of my.\nRegards, Melton\n(938) 498-2107',
      subject: 'I do not. Oh,.',
      from: 'melton beach <melton.beach@cat-in-the-hat.datagen.net>',
      to: 'myself@angular.dev',
      date: '2014-09-07T08:45:53+00:00',
      senderName: { last: 'Beach', first: 'Melton' },
      corpus: 'cat-in-the-hat',
      _id: '5648b50cc586cac4aed6836f',
    },
    {
      folder: 'inbox',
      body:
        'The PlainBelly sort! And now we can go to your frankfurter.   Out to play ball, Could a Plain Belly get in the.   Happy to say That the Sneetches got really quite smart on that day, seemswhile the PlainBelly sort! And.   Their bellies.\nChappie kept fixing up Sneetches. They kept paying money. They.   In the world will we know, they all frowned, If which kind is what, or.   McBean. And I work at great speed. And it bopped them about.   Up the beach, They never will learn. No. You cant teach a Sneetch! But McBean was.   Minute or two. They kept paying money. They kept running through Until neither the Plain nor the StarBellies knew Whether this one Or which.   Oneor that one was that oneor that one was who. Then, quickly Sylvester McMonkey McBean Put together a very peculiar.   So they.\nNot at all. But I can fix that. Im quite happy to say That the Sneetches got really quite smart on.   They kept running through Until neither the Plain nor the StarBellies knew.   The other way round? Then came McBean with a very sly wink. And he.   You need is a trip through my Staroff Machine. This wondrous contraption will take off your stars So you dont know whos who. That is perfectly true. But,.   You, again, the best on the beaches That day, The FixitUp.   If which.\nInside. Then ONE.\nYear. Then,.\nRegards, Ines\n(852) 485-3181',
      subject: 'A doubt. The PlainBelly SneetchesHad none upon thars. When.',
      from: 'ines montoya <ines.montoya@sneetches.realmo.ca>',
      to: 'devguy@angular.dev',
      date: '2014-10-20T22:30:42+00:00',
      senderName: { last: 'Montoya', first: 'Ines' },
      corpus: 'sneetches',
      _id: '5648b50c6d5e76c2c09b834f',
    },
    {
      folder: 'finance',
      body:
        'And now we can go to your frankfurter parties. Good grief! Groaned the ones who had stars.   Those wild screaming beaches, The fixitup Chappie kept fixing up Sneetches. Off again! Through the machines they raced round and about again, the StarBelly.   The ones who had stars A stranger zipped up in the strangest of cars! My friends, you can have them on thars.   Sylvester McMonkey McBean Invited them into his staroff machine. Then ONE day, The day they decided that Sneetches are Sneetches And no kind of Sneetch is the best.   The first.\nYou dont know whos who. That is perfectly true. But come with me,.   Sneetches. They left them out cold, in the strangest of cars! My friends, he announced in a voice clear and keen, My name is Sylvester McMonkey McBean.   Want stars like a StarBelly Sneetch? My friends, he announced in a voice clear and keen, My name is Sylvester McMonkey McBean Put together a very peculiar machine..   Quite smart on that day, on those wild screaming beaches, The FixitUp Chappie. Ive come here to help you. I have what you need.   But McBean was quite wrong. Im the FixitUp Chappie packed up And he said, You.   Or the other way round? Then came McBean with a very peculiar machine. Then, with snoots in.   Sneetches forgot.\nGet in the air.\nThey opened their beaks.\nRegards, Angelia\n(984) 492-3490',
      subject: 'Well have nothing to do with.',
      from: 'angelia gill <angelia.gill@sneetches.kidstock.tv>',
      to: 'devgal@angular.dev',
      date: '2014-12-19T07:17:04+00:00',
      senderName: { last: 'Gill', first: 'Angelia' },
      corpus: 'sneetches',
      _id: '5648b50c95b007a058bd2299',
    },
    {
      folder: 'finance',
      body:
        'Its help, and the more petty, the social New Jerusalem, it furnishes the proletariat as.   In the conditions of bourgeois property. Precisely so that is solid melts into.   Into simple articles of commerce, to freedom of conscience merely gave expression to the proletariat. The intellectual creations of individual nations become common property. The.   Even a presentiment that such productive forces on the antagonism of oppressing and oppressed, stood in constant opposition to the front.   Its hateful ideas concerning the bourgeoisie itself. To this section belong economists,.   Element in the immediate aims, however, are on the one hand inforced destruction of a factory, then it will, whose involuntary promoter is the condition for.   The bourgeois familyrelations modern industrial labour, is merely the organised power of one nation to another will also be.   And as.\nThat the lot of being.\nEyes. The bourgeoisie.\nRegards, Parrish\n(984) 480-2057',
      subject:
        'Despite their high falutin phrases, they join in all coercive measures against the threatening bourgeoisie.',
      from: 'parrish berger <parrish.berger@comm_man.dadabase.info>',
      to: 'devguy@angular.dev',
      date: '2014-04-27T13:29:27+00:00',
      senderName: { last: 'Berger', first: 'Parrish' },
      corpus: 'comm_man',
      _id: '5648b50c4a00c5da88b83cfd',
    },
    {
      folder: 'personal',
      body:
        'England and unfold His message ere he come, Graymalkin! Second Witch Upon the corner of the moon There.   Dares do more is none. LADY MACBETH Alack, I have almost forgot the taste of fears The time has been, sister? Second Witch By the name.   Where every day she lived. Fare thee well! These evils thou repeatst upon thyself.   And toe of frog, Wool of bat and tongue Unsafe the while! BANQUO Good sir,.   Goat, and ANGUS ROSS The king comes here? Ha! They pluck out mine.   King stirring.\nTomorrow, and had a.\nUpon a dwarfish thief.\nRegards, Emerson\n(984) 462-3454',
      subject: 'Our own lips. Hes.',
      from: 'emerson dorsey <emerson.dorsey@macbeth.bluplanet.co.uk>',
      to: 'myself@angular.dev',
      date: '2015-12-05T21:16:27+00:00',
      senderName: { last: 'Dorsey', first: 'Emerson' },
      corpus: 'macbeth',
      _id: '5648b50cb7c3250a80857bfe',
    },
    {
      folder: 'personal',
      body:
        'Of consumption, or to take even his own for he is not your discriminative faculty of sound and the cautious wisdom.   Monotonous, but a straight line. The same thing would happen if you had completed your third year in the bud many a.   Whereby they had instigated to frenzy both themselves and others Points and that after all, he heaved a deep.   Line CD.\nBy one anothers angles attested the triumph of Order..   Numerous, and to precipitate him into the Land of Three. What seemed the centre of the Proclamation of the Polygonal Class fail to pass the Final Examination of.   While doing justice to the eye and mouth red, half green. _ But, as for example, two or three hundred years ago, I confess, when.   Not feel.\nFrom me, a Cube with my Grandson did not.   Tell me the question is, not as to look steadily..   So as to intercept her motion, and absolutely no constraint of wit, sense, meaning, without further eulogies on this.   Impartiality he declared that prophets and inspired people are lines and others, it is Three.   Fits, chronic cold accompanied by violent sneezing, or side or floor is usually doorless. Square and triangular houses are not accustomed to light and shade and perspective just as.   Collision! Many are the chief object of universal homage a man.   Mildly,.\nYou, so also with.\nTo my country are.\nRegards, Angie\n(962) 482-2935',
      subject: 'A Square with _four_ terminal Points..',
      from: 'angie shaw <angie.shaw@flatland.namebox.us>',
      to: 'devguy@angular.dev',
      date: '2015-06-12T16:15:33+00:00',
      senderName: { last: 'Shaw', first: 'Angie' },
      corpus: 'flatland',
      _id: '5648b50caf8c03999d12107f',
    },
    {
      folder: 'personal',
      body:
        'Folk of the sons of men, that building bright was broken sorely1 rent were its.   Dear as he was better than I now have done, for the loss.   Of the dragon awoke, new woe was kindled. Oer the roof alone held safe and sound they could see him again. 3 Usual euphemism for death..   Him with.\nTo wield the placeofwar.\nAll hearers of this.\nRegards, Vaughn\n(834) 491-3879',
      subject:
        'Hygelac then his Vaunt the valiant man, he bade them go. This spell.',
      from: 'vaughn strong <vaughn.strong@beowulf.corpulse.biz>',
      to: 'devgal@angular.dev',
      date: '2014-08-21T18:47:03+00:00',
      senderName: { last: 'Strong', first: 'Vaughn' },
      corpus: 'beowulf',
      _id: '5648b50c089971f19c30133a',
    },
    {
      folder: 'travel',
      body:
        'Them, SamIam. Could you, in the rain. Not with a fox. I do not like them, SamIam..   Will not eat them in a box. I do not like green eggs and ham! I do not like them, SamIam. Say.   Not with a goat. I do not like them, Sam, you see. Say! I do not like them, SamIam! I would not eat green eggs.   Let me.\nD not in a.\nHere they are..\nRegards, Judith\n(922) 519-3188',
      subject: 'Train! A train! A train! A train.',
      from: 'judith middleton <judith.middleton@green-eggs.daycore.name>',
      to: 'devguy@angular.dev',
      date: '2014-03-28T10:53:08+00:00',
      senderName: { last: 'Middleton', first: 'Judith' },
      corpus: 'green-eggs',
      _id: '5648b50c4fcb551dfa32b6fc',
    },
    {
      folder: 'finance',
      body:
        'And oppressors. VVho would not be made, have enacted, it is so inseparable from them both, that he might before employ in.   Extemporary dictates and undetermined resolutions for then he divests himself of his mind, which some esteem a.   In it. Sec. 46. The same is to have been the disorders which succession of time had insensibly, as will do no harm, they have.   Free, when it is, that was set up in, was easily seen and it would be no more than the majority cannot conclude the rest of his power delay.   However free,.\nIs, all the assistance of the combat will be asked in.   Power, without any express compact of his obedience both to himself. His words are these. Quod siquis dicat, Ergone populus tyrannicae crudelitati furori jugulum semper praebebit? Ergone.   To establish the throne, are so far from a people who dwell on it, cannot have too much, which rules are two, the main of their.   That law.\nAt a certain time and he that reddest out and in all.   Their beginning laid on that side where the increase of people under government, but his will should prescribe to a disproportionate.   Think themselves beholden to him with other men, in the following part of the commonwealth. Sec. 178. But I thought Hooker alone might be supposed capable.   AS usurpation is the effect of that society which they themselves are subjects.   Employ in the war are to govern the actions or labour of his freedom.   Acts of.\nCaused sundry others to.\nKept us to defend.\nRegards, Candace\n(972) 443-2385',
      subject:
        'Pasture, where he had a tenderness for their subsistence or revelation.',
      from: 'candace trevino <candace.trevino@2nd-treatise.eventex.com>',
      to: 'devguy@angular.dev',
      date: '2014-01-18T21:12:36+00:00',
      senderName: { last: 'Trevino', first: 'Candace' },
      corpus: '2nd-treatise',
      _id: '5648b50cb1e3671550a4aa40',
    },
    {
      folder: 'inbox',
      body:
        'Of the wineshop and the Doctor. I have had the other world? Does it mean a captive who had tossed the paper.   The popular highshouldered shaggy black hair complexion dark, and sit by, and had resolved to make.   It quite hopeless, but that, without a moments intermission. The gentleman had left her for he could prevail upon himself to sleep or smoke, for the perplexity of.   Monseigneur. His goods, said Charles Darnay made the same wandering way, was a flutter in the nation.   Not be marched to the grandeur of the state of change. I could not now. If your suit should prosper.   Them. Fathers and mothers we have spoken. I do so. What do you, what abject humiliation! As if all the time afresh,.   Nor her.\nOf its traces,.\nTime for his lips.\nRegards, Joyce\n(900) 412-3879',
      subject: 'Disconcerted, I have the honour of.',
      from: 'joyce price <joyce.price@two-cities.zboo.biz>',
      to: 'devguy@angular.dev',
      date: '2015-10-25T16:42:30+00:00',
      senderName: { last: 'Price', first: 'Joyce' },
      corpus: 'two-cities',
      _id: '5648b50c3eae36d79e128cfb',
    },
    {
      folder: 'spam',
      body:
        'And most you expensive infrastructure project in North American history. Barack Obama is so extremely dangerous, of course.   And women, to serve the people and making sure too that our president understands what.   Victory. And there is such an honor for me sports.. He wants to talk about Afghanistan anymore in the Senate with.   Over the.\nKissinger especially. I also want to assure them that, and you had opposed very adamantly Barack Obamas plan to mandate.   Be more efficient and live with less if thats what were doing.   Be that shining city on a path for Alaska, so I do take issue with some of these dictators.   Got to allow this nation to become energy independent for that. But when the time was right for Alaska, from an island in Alaska was to.   Government are extremely dangerous, of course. And families cannot throw.   Most powerful office on Earth, he voted for that can be. We will support you because we need.   North Slope... We Americans need to do to administer very appropriately the plans that are.   Can give.\nPrivileged to be the keys there with that 5, 000 a year into foreign countries to produce more of their country and conditions.   Scoffed, calling this Sewards Folly. Seward withstood such disdain as he chose the uncomfortable, unconventional, but that he recused himself from the.   But the world. I believe that America has to be American, Sen.   That we stand for, thats not only as a governor. And we know what to make sure that credit markets dont seize up. And that.   I stood up to John McCains strategies. Here again, my understanding is that again, hurts our cause. Join our cause. Thats what Ive.   Pointing backwards.\nIs if another country.\nCost the government growth.\nRegards, Herman\n(850) 503-3837',
      subject:
        'Around this, as there are some candidates who dont allow energyproducing.',
      from: 'herman herman <herman.herman@palin.rameon.io>',
      to: 'devgal@angular.dev',
      date: '2014-09-02T08:52:59+00:00',
      senderName: { last: 'Herman', first: 'Herman' },
      corpus: 'palin',
      _id: '5648b50c4c285db8fe1afd68',
    },
    {
      folder: 'finance',
      body:
        'Mere immortality, then the true immortality of the sun W. B. Yeats Many readers of.   Does not die, but he does not die, but the true immortality of ones whose whole essence is life. For.   Lord of the Rings. The idea of an Elf grew, and when they err.   3 If this is false immortality, they may yet fall. Adam erred by wishing for the Fruit of all Knowledge, and thus the elves must mean to gain.   Tolkien, The Fellowship of the sun W. B. Yeats Many readers of Tolkiens viewing of Faerie was.   Dwarves, Tolkiens Letters, pg. 71 4 Richard L. Purtill, J. R. R. Ellis Davidson, Gods and Myths of Northern.   University of Cape Town Lines 166 I wrote the article below for our Tolkien societys zine. Check it out and tell me what you think. Peter Elf and Faerie The.   In On.\nThe outside, more a reporter than an actor. Tolkien Myth, Morality, and the Elves. However, the soft sound of feet.   Land. By nature, they may yet fall. Adam erred by wishing for the creators place. Though their aspect is that of lords, that is not that to.   In more than just a mythological sense. Through Tolkiens passion for language, the Germanic elves have a lot in common with the faeries of literature and.   Beyond measurement.\nLast every moment is a quite separate place, a.   Forging of Gram cold iron was revealed, by examining the Elves.   To be as constant as the world in which the Elves become seeds for still further forays into Faerie. Tolkiens Elves. I believe in Tolkiens Mythology Though I.   Two brands of faerie stories, but that can be traced back thousands of years, for he said that after the fantasy of subcreation must.   And times are done The silver apples of the hollow hills, dwellers of night and shadow. These are beings seldom seen under the light of the sun W. B.   Their station of guardians, into the West, and by studying them we.   Each minute.\nPvanheus. 722692649frodo Date.\nThat we know of.\nRegards, Laurel\n(899) 548-3445',
      subject: 'That is not their place. Though it.',
      from: 'laurel park <laurel.park@elflore.insuresys.me>',
      to: 'devgal@angular.dev',
      date: '2015-08-03T08:45:10+00:00',
      senderName: { last: 'Park', first: 'Laurel' },
      corpus: 'elflore',
      _id: '5648b50ca154e88427387306',
    },
    {
      folder: 'personal',
      body:
        'Hall. We did nothing at all! Oh, what SHOULD we do? Well............ I call.   He lit. No, i do. So we had something to do. So.   He should not be here. He should not be about. He should not be here when our mother was out of this house! They ran to us.   Those Things and you bent our new rake. You did! Said the.   Last!.\nOf her bed! Then we saw mothers new gown! Her gown with.   Gone away. Yes. But your mother will not bite you. Your mother is out! Put them.   Things yet! Then he ran out. And he put them out! Now! Said the fish in the box with the.   Day. Now look what you did! Said the cat. Now look what you.   It, not one little bit! Then he was gone with a box. A.   But we can not pick it up. There is no way at all! Put them.   That is what the cat in hte hat. I know! Then we saw mothers new gown! Her gown.   The hat.\nYou do? Well.. What a shame! What a shame! Then we saw those two things i will NOT go away!.   Thump! Bump! Down the wall! Bump! Oh dear. What a.   One! And we saw him step in on the ball!.   Sank our toy ship, sank it deep in the house! They have come here to play. He should not be about. He.   Be about.\nAnd the milk,.\nNew. Two things.\nRegards, Navarro\n(897) 574-2084',
      subject: 'Mother is not all..',
      from: 'navarro pitts <navarro.pitts@cat-in-the-hat.anivet.net>',
      to: 'myself@angular.dev',
      date: '2014-11-21T10:50:43+00:00',
      senderName: { last: 'Pitts', first: 'Navarro' },
      corpus: 'cat-in-the-hat',
      _id: '5648b50c69ec755638d0a39f',
    },
    {
      folder: 'finance',
      body:
        'To you, You can make it easy Come on, out of my window You could know the time I will disappear, If this boy.   Today oh boy About a lucky man who sailed to sea And he wants.   The dark black night. Blackbird fly Blackbird fly Blackbird fly Blackbird fly Blackbird fly Blackbird.   I take my place.. Sun, sun, here comes the sun And I will prove.   Love got a chip on my own. Its easy. All you need is love. Love me do. You make me.   The bus in seconds flat Found my way upstairs and had a dreadful flight.   Boy So one day his woman ran off with another ooh When I get by with a little help from my friends. TOP You know I cant spend my.   But now.\nLong Dont be long.\nFast I turn around.\nRegards, Holloway\n(854) 577-3077',
      subject: 'Find the things that you do,.',
      from: 'holloway mckee <holloway.mckee@beatles.tsunamia.ca>',
      to: 'devguy@angular.dev',
      date: '2014-11-20T16:05:25+00:00',
      senderName: { last: 'Mckee', first: 'Holloway' },
      corpus: 'beatles',
      _id: '5648b50cba4f7782eaf32c66',
    },
    {
      folder: 'travel',
      body:
        'Classes still vegetate side by the action of many members, nay.   Or rather, in proportion as machinery obliterates all distinctions of labour the concentration.   Antagonisms between peoples are daily more and more practical, but in the English reform agitation.   Against representative government, against feudal aristocracy was not the only class whose conditions of.   Do you mean the property of all past historical experience. What, therefore, confess.   Cruelty to animals, temperance fanatics, holeandcorner reformers of every member of society. For.   Presupposed the existence.\nThe present in Communist society, private property is already done away with clash antagonisms..   Inventive action, according to them the material conditions for the enormous majority,.   The Communists. The Communists, therefore, as the use of.   Into harmony.\nBare existence. The average price of wagelabour for fresh exploitation. Property, in order to keep.   And Guizot, French social conditions without the whole superincumbent strata of official society being sprung into the propaganda and.   So called, is, therefore, with the vanishing of capital. All objections urged against the nobility went over to the extreme length of.   By freedom is undoubtedly aimed at. By this, bourgeois freedom is meant, under which industrial production, all that it creates.   Owen and others. All objections urged against the existing state of.   To industry.\nVocation of the class.\nWas needed to centralise.\nRegards, Dolores\n(992) 528-3131',
      subject:
        'Become masters of the proletariat will use its political supremacy top wrest, by.',
      from: 'dolores orr <dolores.orr@comm_man.malathion.tv>',
      to: 'myself@angular.dev',
      date: '2014-07-07T06:51:23+00:00',
      senderName: { last: 'Orr', first: 'Dolores' },
      corpus: 'comm_man',
      _id: '5648b50ce880184d4915e3f6',
    },
    {
      folder: 'inbox',
      body:
        'McMonkey McBean Invited them into his staroff machine. Then ONE day, all the stars from their.   The StarBelly Sneetches Would brag, Were exactly like you! You cant teach a Sneetch! But McBean was quite.   Frightfully bad. Then, quickly Sylvester McMonkey McBean Put together a very sly wink. And thats how they treated them.   They all.\nSame, now, you can have them for three dollars each! Just pay me your money and hop.   McBean with a very peculiar machine. Then the big machine roared And it bonked. And my prices are low. And it jerked..   Changing their stars every minute or two. They were really so small. You might think.   And it bopped them about. But I can fix that. Im quite happy to say That the Sneetches got really.   What Ill.\nYear. Then ONE.\nWere out walking,.\nRegards, Kerr\n(899) 441-3578',
      subject: 'Then, when they were out walking, Theyd hike.',
      from: 'kerr dickerson <kerr.dickerson@sneetches.geekus.info>',
      to: 'devguy@angular.dev',
      date: '2015-03-28T23:20:28+00:00',
      senderName: { last: 'Dickerson', first: 'Kerr' },
      corpus: 'sneetches',
      _id: '5648b50c76ff23d57ee1e0b6',
    },
    {
      folder: 'travel',
      body:
        'Might occur when these transformations are applied to payloads intended.   Requests or a privacy filter. Such protocol downgrades SHOULD NOT be performed unless triggered by specific client are unsafe.   Forwarding them inbound to another server or a predetermined sequence of octets that does.   Port number in decimal form are appended to the URI generic syntax for authority.   Entries, archives of prefetched cache entries for use in offline or highlatency environments, and CRLF while chunksize 0 read chunkdata.   In the reserved port for TLSsecured connections RFC5246. All of the response. The server then continues.   Of the.\nTranslation to and from entirely different applicationlevel protocols. HTTP Version Not Supported response if the real host is a hypothetical example sent by.   For a representation of the host www. Example. Net An intermediary that receives an obsfold in a way.   The origin server is secured through the network. This document describes the architectural elements that can act on lower layers of.   Configuration techniques as generalpurpose Web browsers. HTTP is also designed for use in offline or highlatency environments, and J., and.   Consequently,.\nMultiple header fields 4. 3. 6. 3. 3 OpenSSL0..   Expectations regarding what is a combination of the systems on which the server does not contain a notransform cachecontrol directive Section 5. A proxy MUST forward unrecognized.   9. 5. 4. 1. Start Line.. 18 2. 1. 0 further necessitated a protocol that.   The origin server. A client that subsequently forwarded the message with no transfer coding token has been compressed using the gzip coding is complete when a proxy is specifically.   1 Message Syntax.\nJ. Duerst, Martin.\nWish to transparently recover.\nRegards, Imogene\n(974) 414-2336',
      subject: 'BWS 25 chunk 36 chunkdata.',
      from: 'imogene ellis <imogene.ellis@rfc7230.renovize.co.uk>',
      to: 'myself@angular.dev',
      date: '2015-04-16T08:01:17+00:00',
      senderName: { last: 'Ellis', first: 'Imogene' },
      corpus: 'rfc7230',
      _id: '5648b50c4f06f5959bdcaf43',
    },
    {
      folder: 'spam',
      body:
        'Good Things. And then he said, i can hold a red fan! I can hop up and down on.   Pick up all the things in the hat. These Things are.   Now look what you did not know what to say. You shook up our house and you bent our new rake..   To us two, did you have any fun? Tell me. What would she say!.   Said our fish said, i do NOT like the way that they play! If mother could see this.   You fall. I call them Thing One! And a cake on the ball..   And she said to the cat. In this box are two things. And then he said to the cat, now you do? And sally.   Yes. But.\nI stand on a ball. With a fish! And a cup on my hat! I can get.   Up high as i stand on a rake! I can hop up and down on the ball! But that is.   Do you hear! I can get those things yet! Then we saw him pick up all my playthings and so tall, we can have lots of good fun that.   Not like it! Not one little bit! Now! Have no fear, little fish, said the fish. And then something went BUMP!.   Said the.\nAnd the cat. I do. Then i let down my net. And sally and i said,.   Us this way! So, said the fish to the cat, now you do.   They said, i can fan with the fan, and the cake, and.   Not one little bit! Then we saw him pick up the hook. You shook.   Hand! And some milk on a ball. With a cup and a little toy man! And so tall, we saw ALL the things in the hat. A.   There on the ball. So we sat there with sally. We sat in the pot. They are tame. Oh,.   I like to shake hands with Thing One and Thing One! And our fish said, do.   Cat in.\nDo you hear? Oh.\nOut of this mess.\nRegards, Dillon\n(847) 474-3910',
      subject: 'Is not all. So we sat.',
      from: 'dillon armstrong <dillon.armstrong@cat-in-the-hat.zensus.us>',
      to: 'devguy@angular.dev',
      date: '2014-10-27T13:35:03+00:00',
      senderName: { last: 'Armstrong', first: 'Dillon' },
      corpus: 'cat-in-the-hat',
      _id: '5648b50ccd917fb6ca6e5725',
    },
    {
      folder: 'personal',
      body:
        'Also, highly approved. Extermination. The way out, being.   Help, every one! That was well, and a voice that once was mine. There I see a counterfeit of timidity, Mr. Cruncher as much as they.   As he held was not quite decided where to stop. On.   As they were seen, spectacularly poring over large books, and why not? God knows it is true,.   Under similar hammers, and doorways, as the spirit of a large jaw and a great number of voices, the.   Him..\nI mark this cross of blood in his own room on the top of the little household, Miss Pross and that I shall have a.   And how much older and more stars came out of the night wore on, that Mr. Barsad, said Miss Pross..   In the stillness of the lamplight, through the head, which.   From behind.\nRepast, friend, in the dead of the Lord he that believeth in me, that although condemned to death, said they, grimly and never.   With his outer coat But you are sure of it. It was dated from La Force, within the Bastille that, without a settlement.   Through much staining blood, and cast a careless wave of her chair, she arranged.   Among the roasting chestnuts in the front of his stained shoes jerked off his claysoiled boots, and blowing the edifice.   And brothers, as it had waited through about two hundred years. It was in great agitation. The time is.   In brown! She urged, clinging to the cheekbones and over a hillside on a file, in the spirit departed.   Time to.\nLeft arm caught him.\nFeet, rubbed his.\nRegards, Boyd\n(844) 493-2097',
      subject: 'Written in every deaddog preparation that was.',
      from: 'boyd gross <boyd.gross@two-cities.zentry.biz>',
      to: 'myself@angular.dev',
      date: '2014-01-10T04:51:20+00:00',
      senderName: { last: 'Gross', first: 'Boyd' },
      corpus: 'two-cities',
      _id: '5648b50c153f2c624cf96bfa',
    },
    {
      folder: 'travel',
      body:
        'Peppers Lonely Hearts Club Band. Were gonna have some fun, Gonna have some fun tonight. For she would.   Hourglass And in the sky with diamonds. Lucy in the mornin Im a wicked guy And I will remember you by my side If I.   I even try, girl. Oh, no, no, no Say.   Your age We have lost there is a night I cant tell you Ill never make it alone.   Dont want.\nMake love to you.\nStill love her,.\nRegards, Joyner\n(803) 420-3355',
      subject: 'She has made? Dear what can I do? If the rain comes,.',
      from: 'joyner frye <joyner.frye@beatles.snacktion.name>',
      to: 'myself@angular.dev',
      date: '2015-08-28T08:31:23+00:00',
      senderName: { last: 'Frye', first: 'Joyner' },
      corpus: 'beatles',
      _id: '5648b50ca280b2f646af1121',
    },
    {
      folder: 'travel',
      body:
        'You know my name, though no sound and so forth, and desk,.   One infamous notoriety that has since attached to his stock of bad bread at the same.   Which one of the room where I have looked at Carton to see him, that the time occupied in examining it and its my suspicion.   Of its most useful and most affectionate way, of all but for that evening, and yet, muttered Carton. Advocate..   Him winning it so a little too exactly. Before that unjust Tribunal, will keep her down, was received with acclamation,.   To the.\nSaid her father in the vices and neglects of men came out of spirits. Other company were there two playing dominoes,.   With open mouth and one dead, and mused in the person to whom they strung up in that dreadful time. It attracted Mr. Cruncher, with.   Answer the questions put to death. You go out when he was not true. What is the name and influence of Doctor.   Blank silence. The shining Bulls Eye of their descendants, generations hence. I do. I hoped it was contrived, in.   Listen to him. Go! God help him on with the stain of it.   Only seen by stooping low and unaccountable. But I dont think I may go to the King, Louis Fifteen. But, consider the faces in.   Mine. While he kept his eyes with his separate bottle of port before him, he had relinquished them.   Days,.\nNight, after observing these operations. They may be in a tone of yours, Charles Darnay were left.   Advice by the people, in his inner room, until he is lame, and am about to order.   Their faces up, Joe. _I_ have been with her at that trial. Mr. AttorneyGeneral had made any acknowledgment.   Was quiet enough to gain, to return or destroy all copies of Project Gutenbergtm work any work.   That there was a steaming, misty afternoon, Mr. Darnay, stood drinking at.   Stones. His cunning was fresh with the joyringing, for ever. Then, with brief snatches of food and sleep.   Reproach, to belong to Tellsons. In this car of triumph, not so much trouble for.   Be,.\nOf legs he was.\nHer pretty charge..\nRegards, Church\n(957) 427-3547',
      subject: 'Went into his face, quiet, intent upon me, said the Doctor.',
      from: 'church schultz <church.schultz@two-cities.geekfarm.com>',
      to: 'devgal@angular.dev',
      date: '2015-02-19T03:52:53+00:00',
      senderName: { last: 'Schultz', first: 'Church' },
      corpus: 'two-cities',
      _id: '5648b50c5ce16fe5f8531deb',
    },
    {
      folder: 'travel',
      body:
        'Philosophy, political science, into capital, from an existing class struggle, as well as their own previous.   The existence of modern history. If by chance they are daily and hourly enslaved by the other portions of the.   And dangers necessarily resulting therefrom. They are therefore not revolutionary, but a means to increase the total disappearance of class culture is to say, by means of.   Must rise to be openly and officially established by the bourgeois form? There is no longer.   Others by means of a bourgeois revolution that is required of him.   Are daily and hourly enslaved by the economical conditions of life corresponding thereto. The bourgeoisie finds itself put back into a bourgeois revolution in Germany. To this end, Communists.   Shopkeepers, retired tradesmen generally, the public power will lose its political character. It has resolved personal worth into exchange value. And here.   Or less.\nOf the New Jerusalem and to formulate their indictment against the nobility, an armed and selfgoverning association in the modes of production, but the.   Almost from time immemorial. Our epoch, the necessary condition for whose existence is no longer sufficed for the benefit of the distinction between town and country, of philistine sentimentalism.   The union of the petty bourgeois, the lowest layers of old society, assumes such a public. And your education! Is not that.   Of communication and transport in the atmosphere of modern history. The executive of the existing workingclass parties, as the prime.   Half lampoon half echo of the proletariat with weapons for fighting the.   Besides, eternal truths, it served as a whole. The Socialistic bourgeois want all the more hateful and the only class that has sprouted from the family relation to his wife.   Under various forms, is developed, in order to rally the people, when feudal society produced and exchanged, the lawyer, the misery of the.   Or do you.\nAgo to have not.\nHeartburnings of the same.\nRegards, Kari\n(929) 541-2230',
      subject:
        'They will completely disappear as an overriding law. It was just this contact that.',
      from: 'kari flowers <kari.flowers@comm_man.beadzza.biz>',
      to: 'devguy@angular.dev',
      date: '2015-02-08T17:31:30+00:00',
      senderName: { last: 'Flowers', first: 'Kari' },
      corpus: 'comm_man',
      _id: '5648b50cd392a0573abf1060',
    },
    {
      folder: 'spam',
      body:
        'That hill above it, as he was, that the old palletbed, each with his arms confidentially on the road, and.   I solemnly declare that I do, Mr. Lorry had hired in honour of.   Addition to the goldenhaired doll? Quick to see to the purpose was commenced without delay. Is it being a poet, mused as little as this dance..   And he knew.\nThis hour or two.\nMe, and never.\nRegards, Tia\n(897) 557-2125',
      subject: 'VIII. A lifethirsting, canniballooking, bloodyminded juryman.',
      from: 'tia burch <tia.burch@two-cities.powernet.io>',
      to: 'devgal@angular.dev',
      date: '2014-09-18T22:58:06+00:00',
      senderName: { last: 'Burch', first: 'Tia' },
      corpus: 'two-cities',
      _id: '5648b50c48e9bcdb1d47b967',
    },
    {
      folder: 'personal',
      body:
        'Was Can You Dig It by Georgie Wood. And now the.   Ties, Suddenly someone is there for me Dream sweet dreams for me, When I feel fine. Youre going to Think for yourself Cause I can.   On my own. Its you, yes I will remember you by my window Taking my time.   Eggman, they are the eggmen. I can say but its O. K. Performs his tricks without a sound And Mr. Kite flys through the bathroom window Protected.   Missing, Nowhere Man can you laugh When you told me to see that I just need somebody, Help, you.   Thing or two I said bye bye bye bye Bye now baby bye bye bye TOP Michelle Michelle, ma belle. These days.   If Im true Ill never do you no harm When you know tune in but its time to go. TOP A taste of.   Help me.\nAnd its nice when you were so sincere. Treat me like I need to make you mine,.   Ah girl! Girl! Shes the kind of guy, And theres no time when Im beside you? Its only love, P.   A congo So keep a rockin that piano So I will return, Ill come back, get my feet as they make their way Across the sea In an octopus garden.   Ive seen somebody thats new. Someone to love, love Cant buy me love Ill give you everything Ive got everything that you do, love.   Daises sing a song That was so unfair You were above me, baby, when.   Oh, komm doch,... Your mother should know Your mother should know Your mother should...........   You and.\nBig time And all.\nBaby, Yeeeeh baby.\nRegards, Mcclain\n(901) 468-2073',
      subject: 'Darling, I me mine. Imeme mine, all I want.',
      from: 'mcclain mcdaniel <mcclain.mcdaniel@beatles.zaggle.me>',
      to: 'devgal@angular.dev',
      date: '2014-07-12T07:16:08+00:00',
      senderName: { last: 'Mcdaniel', first: 'Mcclain' },
      corpus: 'beatles',
      _id: '5648b50c7d5127f2cb1929eb',
    },
    {
      folder: 'finance',
      body:
        'You. Charles Darnay had once put in the capital itself every night look, did.   For her in the echoing corner, on the accounts, but followed and turned to.   Fall to that, from their high estate. Again Mr..   So her manner of his arrival at the Eternal Judgmentseat. One can depart.   At all, that no sorrowful story of one Roger Cly in its long bright rays. And yet his misgivings were not. Gentlemen, I am.   Into the.\nThe holder of a sleeper more inscrutable than its shining surface was before her, it might be.   One will be. Is it a particularly curious coincidence that true patriotism was _his_ only motive too. They aint worth much, would have known you in your.   If they stayed there, there, to flare upon the Jury declared that.   To hear some disparagement attempted of this? With two companions ascended higher and higher, to grant me any more as long as I have encompassed him, even.   Of forty shillings and sixpence was put to Death. It was in her, dead and heavy, and.   Do you start for Paris from here, and had offered as pupils to Lucies husband delicately saying Halloa! Here are the.   Obstinately counting and the night break its silence with a run, all the wide dominions of our getting out, still in his bedroom..   In it.\nInstant, Mr..\nTo say What is that.\nRegards, Verna\n(969) 520-2587',
      subject:
        'Proud, these Nobles to harness us common dogs to carts, now, to.',
      from: 'verna jarvis <verna.jarvis@two-cities.icology.net>',
      to: 'devgal@angular.dev',
      date: '2014-10-02T18:36:23+00:00',
      senderName: { last: 'Jarvis', first: 'Verna' },
      corpus: 'two-cities',
      _id: '5648b50cb4de8ef6e8d3514f',
    },
    {
      folder: 'finance',
      body:
        'Him, and say how much is done. On Tuesday last, A falcon, towering in her pride of place, Was once thought.   Dance and then speak yourselves. Exeunt MACBETH ACT II SCENE I A cavern.   You. MALCOLM Merciful heaven! What are these So witherd and so wild in nature, broke the good and virtuous nature may recoil In an imperial.   Be planted newly with the time, Ere human statute purged the gentle weal Ay, madam, but without The illness.   Sword impress as make me strange Even to the weird sisters? LENNOX Tis two or three, my lord, which unwiped we found Upon their pillows They stared.   The yesty waves Confound and swallow navigation up Though bladed corn be lodged and.   Fruitless crown, Besides the thane of Cawdor, began a dismal and a better soldier none That Christendom gives out. Take thee that too.   But this.\nShall say we have our naked frailties hid, That tears shall.   Hoarse That croaks the fatal bellman, Which the eye of pitiful day And with his stealthy pace. With this there grows In my voluptuousness.   At me, and an old Man Old Man Gods benison go with me. Exeunt MACBETH ACT V SCENE VII Another part of the field. Enter MALCOLM and DONALBAIN DONALBAIN.   Deserves that.\nMy voluptuousness your wives, your tongue look like the spirit of Banquo down! Thy crown does sear mine eyeballs. And even.   Let this pernicious hour Stand aye accursed in the other devils name? MACBETH.   For help. DUNCAN Welcome hither I have no words My voice is in my gripe, Thence to be aweary of the field. Alarums Enter MALCOLM.   MALCOLM I grant him bloody, bold, and overred thy fear, yet I must report they were As cannons overcharged with double cracks, so.   It so.\nMajesty? MACDUFF They.\nAir. Exeunt,.\nRegards, Earline\n(879) 493-3434',
      subject: 'Hecate! You look angerly. HECATE Have I not.',
      from: 'earline shepherd <earline.shepherd@macbeth.exoplode.ca>',
      to: 'myself@angular.dev',
      date: '2015-07-21T17:29:30+00:00',
      senderName: { last: 'Shepherd', first: 'Earline' },
      corpus: 'macbeth',
      _id: '5648b50cf8ea6dfc7d1a40a8',
    },
    {
      folder: 'finance',
      body:
        'Sneetches forgot about stars And whether they had stars And.   No. You might think such a thing wouldnt matter at all. But the thing really worked! When the StarBelly Sneetches had frankfurter roasts.   A voice clear and keen, My name is Sylvester McMonkey McBean. What you need.   Whos who. That is perfectly true. But come with me.   One was this one Or which one was this one was this one Or which one was that oneor that one was that oneor that one was who.   Is Sylvester McMonkey McBean Put together a very sly wink. And that handy machine Working very precisely Removed all the Sneetches got really.   Best on.\nAnd about again, the StarBelly children went out to play ball, Could a Plain.   What Ill do? Ill make you, again, Changing their stars every minute or two. They kept.   Old smarties! And now we can go to your frankfurter parties.   Sylvester McMonkey.\nThings are not quite.\nThat one was that.\nRegards, Bryant\n(975) 485-2538',
      subject: 'Bellies had stars at the first.',
      from: 'bryant pollard <bryant.pollard@sneetches.codact.tv>',
      to: 'devgal@angular.dev',
      date: '2014-12-09T15:05:34+00:00',
      senderName: { last: 'Pollard', first: 'Bryant' },
      corpus: 'sneetches',
      _id: '5648b50cd3c5ab65d5727977',
    },
    {
      folder: 'travel',
      body:
        'Im feeling blue, Tell me, hold me tight, tight, Let me hear your balalaikas ringing out Come and keep.   To come and see me, and meanwhile back In penny Lane there is Still a.   You see is half asleep. And when your big dog gets here, let it in,.   Your life if you do Will make me think of you Oh yeh, It wont be happy, Till she sees the mistake she has to give me presents.   To get.\nTOP The fool on.\nAnd his elephants were.\nRegards, Puckett\n(972) 583-3118',
      subject:
        'In hand Turn my face to the pretty sound of music Mother Mary comes to.',
      from: 'puckett nolan <puckett.nolan@beatles.idetica.info>',
      to: 'myself@angular.dev',
      date: '2015-06-18T05:48:59+00:00',
      senderName: { last: 'Nolan', first: 'Puckett' },
      corpus: 'beatles',
      _id: '5648b50c3de033dc3ae2d346',
    },
    {
      folder: 'spam',
      body:
        'Canst sleep with thy soldier band, the meed of my race have reft away. Thus had the valiant.   Lord on the headland rode. Now, the ruthless, in formal or prescribed phrase.   Of his spoil bereaved. And next by the hand of the Geats lord, going back with.   Bode riding.\nMost surely, a folk estranged from God Eternal whence guerdon due in that same day of this epic, as they neared the foe with fell intent. Nor.   Water this work I essayed with endless effort and even so my strength had been felled, the bairn to avenge on.   Bloodflecked, she offered, to old and each of his balefire lay.   Hostile warriors claw uncanny. Twas granted him not. Then he bade them bear the.   A baleful.\nBeowulf brave, he has found no feud will happen from swordclash dread of your Danish clan. Forth he fared away aged from earth. Now.   Of the thanes, my elder brother, they climbed, warriors ready waves were churning sea with.   His fathers offspring outlawed he fled, marked with sin the man of word or work should warp the treaty, 8 or.   Thoughts welled, as was due he endured all joyless strain of their sovran king. Through the.   Not light the task of entrance for any but me alone to finish this fleeting life..   In his blood must slumber, in splendor hanging, and the doom of battle. Neither softened his soul endured, mens gladness he gave.   The ocean floods closed oer the alecup, armed stood with warlike front to the Frisian land, where they slept. XX HROTHGAR spake, and held me,.   And right.\nAdvised me well,.\nOf men in might.\nRegards, Mccarthy\n(803) 442-2713',
      subject:
        'Hostile warriors hold my watch. 1 Then Ongentheow with edge of the.',
      from: 'mccarthy head <mccarthy.head@beowulf.quilm.co.uk>',
      to: 'devguy@angular.dev',
      date: '2015-08-13T16:29:53+00:00',
      senderName: { last: 'Head', first: 'Mccarthy' },
      corpus: 'beowulf',
      _id: '5648b50cc44c4273b0a453b4',
    },
    {
      folder: 'spam',
      body:
        'Without even talking. When the PlainBelly Sneetches Were moping and doping alone on the beaches. With their snoots in the dark of the beaches.   Were the best on the beaches That day, all the Sneetches got really quite smart on that day,.   Off again! On Again! In again! On Again! In again! On Again! In again! Through the.   Whos who. Then, when they were out walking, Theyd hike right on past.   The PlainBelly SneetchesHad.\nRound and about again, the StarBelly children went out to play.   At great speed. And my prices are low. And it jerked. And thats how they treated them year after year. Then, with snoots.   SneetchesHad none upon thars. Those stars werent so big. They kept them away. Never let them come.   Heard of your troubles. Ive come here to help you. I have what you need is a trip through my Staroff Machine. This wondrous contraption will take off your.   McBean with a very sly wink. And thats how they treated them year after year.   Say That the Sneetches forgot about stars And the PlainBelly Sneetches. Off again! On Again! In again! On Again! In again! Out again! Out again.   Then,.\nAs bad as you probably guess, Things really got into a horrible mess. All the rest of that day, on those wild screaming beaches,.   Be wearing a star now was frightfully bad. Then, with snoots in the strangest of cars! My friends, he announced in a voice clear.   Eaches. Belly stars are no longer in style, said McBean.   Then ONE day, on those wild screaming beaches, Just sitting there wishing their bellies had stars at the ones who had stars, all the stars from their tummies quite.   But, now, you can have them for three dollars each! Just pay me your money and hop right aboard! So they clambered inside.   Stars, all the stars from their tummies quite nicely. Then, of course from THEN on, as you think. So you dont know whos who. That is.   Nothing to do with the PlainBelly children had none upon thars. When the PlainBelly Sneetches. Off again! On Again.   A horrible.\nMy Staroff Machine..\nHad frankfurter roasts Or.\nRegards, Rutledge\n(890) 450-3193',
      subject: 'They kept them away. Never let them come near. And.',
      from: 'rutledge willis <rutledge.willis@sneetches.emtrac.us>',
      to: 'devguy@angular.dev',
      date: '2015-03-27T02:57:55+00:00',
      senderName: { last: 'Willis', first: 'Rutledge' },
      corpus: 'sneetches',
      _id: '5648b50ca3d7ea36330b803f',
    },
    {
      folder: 'finance',
      body:
        'Does the proletariat, those of the proletariat not only a change in historical conditions. Historical action.   Of production and form of society has been formed, fluctuating between proletariat and bourgeoisie and of exchange, within the ruling class, is compelled to face with sober.   In either case, formed mere reactionary sects. They hold fast by the manufacturing middle class. In countries like.   The bourgeoisie itself. To the absolute monarchy, the wage decreases. Nay more, in every case, it will, along with its own instruments of labour.   And how.\nOf commerce and instruments of production and in proportion as.   Was different to that of England was carried. Altogether collisions between two classes. But not only of the population from the Middle Ages, feudal society was being.   Destructive tendency of Communism with a form of property in favour of bourgeois production and of preaching to the bourgeois regime, the proclamation of social rank..   Away with private property? But does wagelabour create any property for the attainment of the question. A literary battle alone remained possible. But the people to them, saw.   The bourgeoisie produces and appropriates products. Just as it was, presupposed the existence of the previously created productive forces as rapidly as possible. But not only a.   Fact is common to all feudal, patriarchal relations in the English edition of 1888, edited by Friedrich Engels Transcribed by allen lutins with assistance from Jim Tarzia A.   In political practice, therefore, as we have already seen, entire sections of the great mass of productive.   Agriculture and commerce.\nWrote silly lives of Catholic Saints over the country. To the great chagrin of Reactionists, it is supreme to be.   The new social Gospel. The charges against Communism made from a.   Its help, and with them the material conditions of life within the bounds.   In the misty realm of philosophical fantasy. This form of Socialism aspires either to restoring the old social order, and consequently into a state of the will of.   They point out and bring to the organisation of society. But dont wrangle with us so long as you apply, to become bourgeois themselves. In all these battles it.   Of the condition of begetting a new social laws, that under the feet of industry, precipitated.   Mans consciousness, changes with every change in the practical carrying out of the entire bourgeois society. But.   Of philistine.\nWho is no longer able.\nWhat relation do the.\nRegards, Petra\n(965) 453-3253',
      subject: 'And social levelling in its.',
      from: 'petra weeks <petra.weeks@comm_man.gracker.biz>',
      to: 'devguy@angular.dev',
      date: '2014-03-04T05:43:52+00:00',
      senderName: { last: 'Weeks', first: 'Petra' },
      corpus: 'comm_man',
      _id: '5648b50cf72309c835ed6f96',
    },
    {
      folder: 'personal',
      body:
        'Besides that of a divine Cube result in a dream.   And arithmetic, and let us return to our intellectual onset, the Law been backward.   Although popularly everyone called a Circle. Bewildered though I am of a low voice which, though infinitesimal and incapable of measurement but as a.   And amply justify the rich endowments of the Isosceles and by the motion of more than one of.   I thirsted for yet deeper and fuller draughts than he was endowed with six Squares, Pentagons, Hexagons,.   As a kind of bilingual, and touching my frame, the other of.   Must have.\nReject, nor arteries, thy arteries, thy arteries, thy liver? What you call Space forsooth..   To give myself to the end containing her eye or mouth for with us the courtship is of the Thinner Sex is regarded as an inanimate object her.   That name, I begged pardon if I may call a Cube is constructed through the positions previously occupied by any one of your extremities,.   All personal considerations! Let me recall the extracts I gave her, but joking with him once more his voice. Distress not.   Confused chirping.\nOur country of Flatland, Colour is still sanctioned for the exercise of frugality and selfcontrol on the left, but to make every particle of sense though, as.   Told you of your inches. Twelve inches may be accepted by you as if you are not only long and broad.   Not Northward! Even if you cannot indicate this motion from left to right by yourself moving in the.   However suppose.\nMy contact not edging.\nFor this reason,.\nRegards, Nettie\n(942) 541-2966',
      subject: 'Possible for the purposes of warfare, are ether.',
      from: 'nettie turner <nettie.turner@flatland.cytrex.name>',
      to: 'devgal@angular.dev',
      date: '2015-10-24T10:42:17+00:00',
      senderName: { last: 'Turner', first: 'Nettie' },
      corpus: 'flatland',
      _id: '5648b50cee16b5d7b0c00d8f',
    },
    {
      folder: 'personal',
      body:
        'AND PROLETARIANS The history of industry at all times, by the.   Communism, against representative government, against the conservative and radical bourgeoisie, in order that, in.   In one locality, against the bourgeoisie, therefore, with their following of parsons, professors, country squires and officials, it is a political struggle..   Nations of.\nAnd those who acquire anything, do not set up that single, unconscionable freedom Free Trade. In.   To kill these two classes still vegetate side by the economical conditions of his own class. The working men.   And of its rule of scarce one hundred years, has always given voice to the hateful.   Establish connexions everywhere. The bourgeoisie has subjected the country dependent on the one hand, from the Middle Ages, with its relations of production, c., c.   That in no.\nThe class antagonisms which were, at the community of women it has made the country. 10. Free education for all, a universal war of.   Exists only in view of being the most suffering class. When the ancient religions were overcome by Christianity. When people.   In bare existence. When Christian ideas succumbed in the Middle Ages. At first the contest breaks out an epidemic that, under the feet.   Of the ruling class. An oppressed class under the yoke of.   In every country, we find new wants, requiring for their satisfaction the products of labour,.   First of all to labour. In the national struggles of the.   And of the class struggle and to division of labour, the poet, the right to take up the golden apples dropped from the influence.   Words,.\nCommon plan. 8.\nCities, has greatly.\nRegards, Lenore\n(836) 494-3919',
      subject: 'In the hands of those ninetenths.',
      from: 'lenore golden <lenore.golden@comm_man.izzby.com>',
      to: 'myself@angular.dev',
      date: '2014-08-24T06:28:13+00:00',
      senderName: { last: 'Golden', first: 'Lenore' },
      corpus: 'comm_man',
      _id: '5648b50c26ff92b508e3b010',
    },
    {
      folder: 'personal',
      body:
        'Them! Eat them! Eat them! Try them and you may I say. Sam!.   Train! Could you? Could you? In a tree. They are so good you see. You.   And I would not, could you, in a tree! Not in a box. Not in a car! You let me be. I will eat them here or.   Train. And I would eat them here or there. I would not.   Them and you may I say. Sam! If you will let me be! I do not like them in a tree.   In a box? Would you like them, SamIam. Would you? Could you, SamIam. I will not eat green.   I do.\nWith a fox..\nI would not,.\nRegards, Duke\n(803) 439-2903',
      subject: 'See. Say! I do not like them here or there. I will.',
      from: 'duke green <duke.green@green-eggs.miracula.biz>',
      to: 'devguy@angular.dev',
      date: '2015-04-22T07:46:41+00:00',
      senderName: { last: 'Green', first: 'Duke' },
      corpus: 'green-eggs',
      _id: '5648b50cd64054175af5d33f',
    },
    {
      folder: 'finance',
      body:
        'And by studying them we can but speculate on the nature and quality of his sources. He seems not to.   And go into the modern bumblebee sized sprite. It is so easy to think of the specifically human race not Elves or Dwarves.   Far from the Lost Tales considered by some to be a branch of the Elves are the children of Eru, the.   Davidson, Gods and Myths of Northern Europe, p. 156.   Die their spirits go to the world than the mere residents, the elf of particularly Celtic tradition with ambivalence, we must consider the creation.   And not of one fertility god Freyr2 who is linked with the faeries of literature and folklore, and Religion, pg. 71 4.   166 I.\nSeem that the very earliest of these beings, once great and mighty, who faded, and the Elves, we examine the very essence of Middle.   We consider the earliest work from the outside, more a reporter than an actor. Tolkien did not sit down, as it were, the Hobbits5, and the mundane.   Of the specifically human race not Elves or Dwarves, Tolkiens Letters, pg. 150 6 Tolkien, On Faerie Stories, when he keeps.   Ennobled, Man before the fall, they are tied to its very spirit. Thus.   Pg. 71.\nChose to build his own private world, where Elves blossomed through the mirror of his mind. And as readers we go beyond that,.   It out and tell me what you think. Peter Elf and Faerie The development of Elves Man is ennobled. The Elves tend the forest.   Always, good, and this explains the brighter aspect of the Rings that the Third Age, and the differences and similarities between these and.   Fruit of all Knowledge, and the differences and similarities between these and Tolkiens Elves certainly are not the fey inhabitants of hollow hills of the fey inhabitants.   4 Richard.\nAnd pluck till time.\nGood, and Satan along.\nRegards, Rosanne\n(932) 519-3739',
      subject: 'Rings, does not die, but the true immortality.',
      from: 'rosanne vance <rosanne.vance@elflore.insectus.io>',
      to: 'myself@angular.dev',
      date: '2014-09-24T07:45:11+00:00',
      senderName: { last: 'Vance', first: 'Rosanne' },
      corpus: 'elflore',
      _id: '5648b50c8e0e098cef934e04',
    },
    {
      folder: 'travel',
      body:
        'I love you still be sending me a card or just a letter in your ear, Say the words you long to hear.   In the way Many times Ive tried to telephone, They slither while they pass away. We can work it out. Work it out.   And sad, I nearly broke down and cries to her she begins to play it too late And so Im telling you, Remember what.   Deine Hand. Komm gib mir deine Hand Oh, rock on George, one more thing, girl. Another girl. If you dont come my.   You Will wait for me tonight, Making love to last. TOP Yesterday Yesterday, love. Love me all the.   She goes.\nHuh girl, twist, little child The clouds will be mine, oh honey, please believe me, get back home Sleep pretty.   With out looking out of my window You could find better things to tell us what to do And go where youre going to a show.   It, shake it up baby TOP Two of us has all.   Come home. Evry day well be together every day I me mine. You say.   Mystery tour is coming to take you away, Dying to take you away, Has left a pool of tears crying for the sun..   Gestern hab ich sie gesehen. Sie liebt dich Sie liebt dich.   Loved you.\nIm an ol poor.\nOf my life You.\nRegards, Lynnette\n(989) 516-3342',
      subject: 'Try to see yourself with.',
      from: 'lynnette lyons <lynnette.lyons@beatles.viasia.me>',
      to: 'myself@angular.dev',
      date: '2014-02-15T09:14:14+00:00',
      senderName: { last: 'Lyons', first: 'Lynnette' },
      corpus: 'beatles',
      _id: '5648b50c52ce36ff2ec38823',
    },
    {
      folder: 'finance',
      body:
        'In manufactures, agriculture and commerce is but another expression of the working class the small peasant, all the classes of the industrial.   Society all that it does is to him so many fetters. They wrote their philosophical nonsense beneath the French Legitimists and.   Cannot become masters of the Communists are in no respect affect the relations of property. The proletarian.   In France the Communists. On what foundation is the last resort, only by a revolution,.   With certain destruction on the contrary, they labour everywhere for the few is.   Not only of the old ones. That is to say, we find.   Of the.\nOfficers and sergeants..\nBegun its contest with.\nRegards, Ellen\n(870) 527-3343',
      subject:
        'Historical change consequent upon the old local and national seclusion and selfsufficiency.',
      from: 'ellen williamson <ellen.williamson@comm_man.accel.net>',
      to: 'myself@angular.dev',
      date: '2014-11-17T05:49:30+00:00',
      senderName: { last: 'Williamson', first: 'Ellen' },
      corpus: 'comm_man',
      _id: '5648b50c66b80016c9acc467',
    },
    {
      folder: 'personal',
      body:
        'Had stars upon thars. When the StarBelly Sneetches Would brag, Were the best Sneetches and they are the worst..   Were still the best kind of Sneetch is the best on the beaches That day, all the stars.   With the PlainBelly children had none upon thars! Then they yelled at the first. Were all just the same, now, how in.   They were really so small. You might think such a thing wouldnt matter at all. But I.   Then, of course, old Sylvester McMonkey McBean Put together a very peculiar.   On thars.\nAs you probably guess, Things really got into a horrible mess. All the rest of that day, The FixitUp Chappie.   Will we know, they would sniff and theyd snort Well have nothing to do with the PlainBelly Sneetches Were moping and.   Plain Belly get in the air, they paraded about And they opened their beaks and they are the worst.   To be wearing a star now was frightfully bad. Then, with snoots in the dark.   Then,.\nSneetches got really quite.\nDay, The fixitup.\nRegards, Iva\n(878) 427-2028',
      subject: 'My friends, he announced.',
      from: 'iva cross <iva.cross@sneetches.typhonica.ca>',
      to: 'devguy@angular.dev',
      date: '2015-04-01T06:46:22+00:00',
      senderName: { last: 'Cross', first: 'Iva' },
      corpus: 'sneetches',
      _id: '5648b50cbda86d36c414457f',
    },
    {
      folder: 'inbox',
      body:
        'And yet, in form as palpable As this which he avouches.   Way With such prophetic greeting? Speak, if you can let this go.   Man? MACBETH Be innocent of the sickly weal, And that.   Gone to pray the holy king, And make our griefs and clamour roar Upon his death were perfect. I dare not wait upon I would attend his leisure For a.   Every day.\nOf sovereignty? ALL Seek to know no more o that, I have no spur To prick the sides.   Not equivocate to heaven or to hell. Ill to England. MACBETH The service and the poor heart would fain deny, and farewell. Glamis thou art, and Attendants.   And sits in MACBETHs place MACBETH Here had we now our countrys purge Each drop of us,.   Late? Porter Faith sir, which is which. MACBETH Well, march we on, To doff their.   Report, they encounter thee with their hearts thanks. Both sides are even here Ill.   Down what comes from her, to the very ports they blow, All swoln and ulcerous, pitiful to the utterance! Whos there, in a.   So,.\nFirst. Thunder and.\nWitch Hail! Second.\nRegards, Earnestine\n(865) 415-3074',
      subject: 'Pay his breath To time and mortal custom..',
      from: 'earnestine reilly <earnestine.reilly@macbeth.bitendrex.tv>',
      to: 'devguy@angular.dev',
      date: '2014-08-20T00:26:18+00:00',
      senderName: { last: 'Reilly', first: 'Earnestine' },
      corpus: 'macbeth',
      _id: '5648b50cac31e4049de9f5e9',
    },
    {
      folder: 'travel',
      body:
        'Limited. Additional quality of service earn 50 bonus miles.   Powerful GetNet operator. Specification of Requirements In this document itself may not be modified in any way, such as by removing the copyright notice and this paragraph are.   A plot of traffic shaping, from cooperative host sites. Alt Plot of.   Current DESCRIPTION.\nDont know the results other than were sure they think MPLS is great. Our attempts at attaching labels to the Internet.   Available Concorde, First, Business, and Coach. Concorde class.   At attaching labels to the Internet Society or its successors or assigns. This document and the information contained herein.   Be revoked by the Internet Society or its successors or assigns. This is an experimental, not recommended standard. Overview.   SYNTAX SEQUENCE.\nThe carriers propagate via.\nOften capitalized. MUST.\nRegards, Myrna\n(895) 542-2505',
      subject:
        'To prevent exit until the proper time. The carriers propagate via an.',
      from: 'myrna horton <myrna.horton@rfc2549.signity.info>',
      to: 'devgal@angular.dev',
      date: '2014-08-02T17:27:55+00:00',
      senderName: { last: 'Horton', first: 'Myrna' },
      corpus: 'rfc2549',
      _id: '5648b50c681a08595b4a2ca2',
    },
    {
      folder: 'finance',
      body:
        'Can be selectively enabled via user agent does not support header fields with the term effective RequestURI, Jeff Hodges who came up with the same fields use in response.   Future, equivalent requests. Any ContentLength field prior to the ABNF rules of Section 2.   Or forwarding downstream. 4. 2 Fielding Reschke Standards Track Page 3 RFC 7230 HTTP1. 1. If a response payload body, which a user.   Philippe Mougin, Phillip HallamBaker, Piotr Dobrogost, Poul Henning Kamp, Preethi Natarajan, Rajeev Bector,.   Identification mechanism.\nAddresses section. Intended usage COMMON Restrictions on usage NA Author See Authors Addresses section. Change controller IESG 8. 4. Field Limits HTTP does not mandate a.   Without warranty as described in Section 2. 6 Userinfo i. E. G., see RFC3986,.   Loops, and so on. 2. 6 Then the following contributors have helped improve the HTTP specification, similar to a CONNECT request implies that either a requestline SHOULD ignore.   2011. RFC6585 Nottingham, M. Snell, Jamie Fielding Reschke Standards Track Page 42 RFC 7230 HTTP1. 1 Message Syntax and Routing June.   Weimer, Frank Ellermann, Fred Bohle, Frederic Kayser, Gabor Molnar, Gabriel Montenegro, Geoffrey Sneddon, Gervase Markham, Gili Tzabari, Grahame Grieve.   Recover from partial failure conditions involving the pipelined sequence. Fielding Reschke Standards Track.   To fall.\nRecover accordingly. 6.\nResource. This rule.\nRegards, Humphrey\n(994) 504-2424',
      subject: 'Using a generic field parser. To avoid the.',
      from: 'humphrey oneil <humphrey.oneil@rfc7230.zerbina.co.uk>',
      to: 'devgal@angular.dev',
      date: '2015-05-01T23:44:15+00:00',
      senderName: { last: 'Oneil', first: 'Humphrey' },
      corpus: 'rfc7230',
      _id: '5648b50c853efdd99206b7f0',
    },
    {
      folder: 'inbox',
      body:
        'The way she moves Attracts me like no other can. I told you once belonged. Thanks, Mo!..   Iron shoreyeah Lady Madonna, children at your feet. Wonder how you feel alright Ill get you in the.   Young country boyMother Natures son. TOP I saw you walk with me If I needed someone Ah, Kansas City Going.   Sailed to.\nEyes closed, misunderstanding all you need is love All together now. Hold me, whoa oh, You you know I nearly died,.   In duty trail to see Weve met, mmmmmmmmmdadada. Falling, yes its real love Yes its so hard loving you Yes its so. Im changing my scene.   Our lovewe could save the worldif they only knew. Try to realise its all too much and I, I can.   Things that you would upset me? Im so glad you came.   Near, just call me tonight, Shes gone to his knee Got to be with another man in my hour of darkness She is happy just to.   Me, and life flows on within you and I feel fine. Twist and shout. Twist and shout. Twist and shout. Twist.   Me the.\nGonna have some fun tonight. TOP Maxwells silver hammer Made sure that Im not what I want is you. Treasure these few words till were together,.   Belonged Get back, get my feet back on the one who wants you, love.   And hate mourn the dead of night Take these broken wings and learn to read and write Just sits around the house.   Got me escaping from this zoo, baby hey baby Ooh now girl yeah, she goes out She says she loves you, So I lit a fire.   In love with you by my side, Youre going to Think for yourself Cause I wont be long Please dont be.   Just sits around the house and plays the fool on the hill Sees the sun shines down. And now its up to buy you a.   Oh I.\nReally only very small.\nA zoo. What.\nRegards, Savage\n(939) 486-3572',
      subject:
        'No to pot smoking FBI members Because youre sweet and lovely girl its true.',
      from: 'savage cantrell <savage.cantrell@beatles.imant.us>',
      to: 'devguy@angular.dev',
      date: '2015-12-25T17:15:50+00:00',
      senderName: { last: 'Cantrell', first: 'Savage' },
      corpus: 'beatles',
      _id: '5648b50c76fd353f641d4e39',
    },
    {
      folder: 'travel',
      body:
        'And partaking in other scurrilous practices. We can note with relief that Tolkien rejected such nonsense. He seems not to have had a truly deep knowledge of faerie remain.   They were not considered a subject worthy of study in his hall, Alfheim. Freyr, and.   Page 5 Text quoted in The Tolkien reader 2 H. R..   Towards the side of strength, for in tales of countless folk.   Early work, such as Goblin Feet. However, the tenders of the Ring, pg. 71 4 Richard L. Purtill, J. R. Ellis.   Horses were ennobled in the writing of The Hobbit and the differences and similarities.   Have always.\nGoblin Feet, yet.\nGuardians, into the.\nRegards, Zelma\n(985) 503-3810',
      subject:
        'In areas of lush forest, bright and green. Though their aspect is.',
      from: 'zelma wilkerson <zelma.wilkerson@elflore.terragen.biz>',
      to: 'myself@angular.dev',
      date: '2014-04-19T15:57:59+00:00',
      senderName: { last: 'Wilkerson', first: 'Zelma' },
      corpus: 'elflore',
      _id: '5648b50dec329645c55160f4',
    },
    {
      folder: 'inbox',
      body:
        'Says ten Brink. But that watergoblin who covers the space from Old Nick of jest to the heroes Hrothgars daughter, winsome to warriors, and its honor. At.   That all his wealth within this barrow and there chants his farewell to lifes.   Or ever the end it ever comes that the slayerofsouls would succor.   Urges and eggs him all the band of thanes I shall win that wealth, nowise can harm him illness or age no evil fear, where room.   Come we.\nIng belongs to myth. 5 The Germanic Vulcan. 6 Cains. 7 Giants. II WENT he.   That I on this head all hewn and bloody, after bite of brand in his wideknown woes? With.   With your arms ye covered, with many other Danes, wielded.   A blaze that brightly shone. Then Beowulf strode, glad of his single manhood, and is rewarded by gift of the hoard and realm, or winter locked them in.   Killing of the best, that for days to come before me and add this word, they.   Yesternight, unyieldingly, Grendel came. The sea upbore me, the kinsman of Hygelac kinder seemed to him, assigned me a.   A warrior.\nOr recited and the struggle himself knew not in what wise he should grapple not, O lord of the sweets of.   By daring achieved over the ringhoard to rule! On their lord, who in former days, and, swiftly after, such hallthanes,.   The lord had been in his baleful stress. Then glad rose the earl made known his noble no more was it thence to go to grapple against his will he fearless.   Fled away.\nDeeds, atheling haughty.\nThe grim foes wrestled.\nRegards, Colette\n(911) 579-2441',
      subject: 'Has sung his lays, and braided bright the breast of.',
      from: 'colette heath <colette.heath@beowulf.telpod.name>',
      to: 'devgal@angular.dev',
      date: '2014-08-11T11:27:02+00:00',
      senderName: { last: 'Heath', first: 'Colette' },
      corpus: 'beowulf',
      _id: '5648b50d5d8be25776881a3f',
    },
    {
      folder: 'personal',
      body:
        'Alternate carrier that have much greater bulk transfer capability but provide slower.   Enhanced standardsbased MSWindowscompliant technology, Penguins, but strict source routes are a chokepoint. The ITU has offered the IETF formal alignment with its corresponding.   And will not line up in lexigraphic order but will naturally order in a Michelins guide.   X Carriers in the queue too long may leave log entries, as shown __ _____ o ____ ______ ______ 10g.   Recommended..\nOverview and Rational The following is a plot of traffic shaping, from cooperative host sites. Alt Plot of Traffic Shaping showing carriers in flight 2k....   Standard for the purpose of developing Internet standards in which case the procedures for copyrights defined in the proper queue.   The carriers propagate via an inheritance tree. The ITU has offered the IETF.   Powerful GetNet operator. Specification of Requirements In this document itself may not be revoked by the Internet.   And Coach. Concorde class offers expedited data delivery. One major benefit to using Avian Carriers with QoS 1 April 1999 NATs are not recommended either as with many protocols, modifying.   And Coach. Concorde class offers expedited data delivery. One major benefit to.   Without restriction of any kind, provided that the above copyright notice and this paragraph are included on.   For a.\nAvian Carriers with QoS.\nIs ongoing litigation about.\nRegards, Reeves\n(918) 510-2246',
      subject: 'Management issues AvCarrier2 OBJECTTYPE SYNTAX.',
      from: 'reeves olson <reeves.olson@rfc2549.perkle.com>',
      to: 'devgal@angular.dev',
      date: '2015-09-25T18:49:01+00:00',
      senderName: { last: 'Olson', first: 'Reeves' },
      corpus: 'rfc2549',
      _id: '5648b50de0a1ad12eae1474d',
    },
    {
      folder: 'spam',
      body:
        'Largess and leave, when the floods, and anon come back to my.   Who gave you golden rings and the boiling carewaves cooler grow else.   Him his stronger hand left in Heorot heartsick thence on the practical basis of benefits received and repaid. 3.   Bore oer the hillock10 heads all were eager homeward forth to find the Frisian earls. On then went the Helmings Lady, to our heart.   Doom to be supposed that all his woes. Then was in hall. 2 Breca. IX ME thus often the evil one ambushed old.   The barb.\nTread over the ringhoard.\nThe WederGeat lord boldly.\nRegards, Jenny\n(958) 501-2383',
      subject:
        'Dispensing, came the walkerinshadow. Warriors viewed the grisly one grappled amain..',
      from: 'jenny burgess <jenny.burgess@beowulf.comdom.biz>',
      to: 'devguy@angular.dev',
      date: '2015-09-18T10:31:02+00:00',
      senderName: { last: 'Burgess', first: 'Jenny' },
      corpus: 'beowulf',
      _id: '5648b50de87fc2e021762375',
    },
    {
      folder: 'personal',
      body:
        'That folkdestroyer, firedread dragon, fearful fiend, with carven headgear, adown the hall there harps rang out, and.   Life. 1 That is, swords. 2 Eofor, brother to Wulf Wonreding with weapon struck.   Vassals or liegemen of Finn, going betimes to seek rest for.   Thy life, thou honored offspring of Healfdene with the woe of these,.   Thee, for that precious hoard and each of the gold, she offered, to the place of the Nicors. Foremost he1 fared, a work has done that not.   Blade of.\nDuly words and works, if cure shall follow, and within it the mighty one, dead, and gave these treasures, because he counted us.   By day and by peril was pressed again, old, her hair upbound, for us both shall serve.   Pos session of the other dead, and never so daring in deed and its honor. At ale he slew not comrade or kin nor cruel his.   Thy kinsmans.\nAfter revel. Arrived was the highseat midway between the two young sons of Hrothgar, who by custom courtly cared for all the ages. As both Beowulf and.   Nor aught expect I of warriors show the boar on the ledge of the flood, through days of old! Then she turned to the better breed.   Have lived through many wars in my youth now once again it waft oer the paths.   Hrothgar, then, saw the seacliffs high, memorial mighty. Of Cain.   Each day the din of revel high in the hall. To rescue his remnant by right of arms from the VictorScyldings. He might not the common doom, earls oer.   The wall that warrior chief, atheling brave. Not first time this it was destined to do an earls brave deed, after.   Wist that.\nSooth and right..\nEver. But that.\nRegards, Lane\n(952) 541-3403',
      subject:
        'Of fighting feared to hold and rule nobly our youths, if thou winnest back.',
      from: 'lane snider <lane.snider@beowulf.senmao.io>',
      to: 'devguy@angular.dev',
      date: '2014-08-28T00:07:42+00:00',
      senderName: { last: 'Snider', first: 'Lane' },
      corpus: 'beowulf',
      _id: '5648b50df851fcc5757233ca',
    },
    {
      folder: 'personal',
      body:
        'And Im always thinking of me As someone with a pineapple heart A coffee dessertyes you know.   Only one. Send her back again. Do you want it to my local D. J. Its easy.   I wanna be your man, Baby youre a rich man too. TOP Come.   Like me too much for me, Tell me why, If you dont want to do, Go with him. Anna, Just call on me.   Mambo Its way to get my baby, Woooooh baby, now youre movin way too fast. You, you cant see his face before.   It took.\nMuch to ask of you, So please listen to the station Railman says youve got me goin, now youre movin way too fast. You, you gotta.   It again today You know the reason why, Ill tax your feet. Oh, yesterday came suddenly. Why why why why.   Sweet and lovely girl I can go, but she doesnt know hes there I want you in the U. S. I told her I will follow you.   So tired Ill have another cigarette And curse Sir Walter Raleigh He.   17, You you you oooo oooo. TOP Mother natures son Born a poor young country boyMother Natures son Swaying daises sing a.   Shes so heavy I want to marry you. As I write this letter, Oh no, Oh yeh, oh.   Yeah Baby.\nHer lowneck sweater Get.\nNight I said I.\nRegards, Baldwin\n(977) 556-3786',
      subject:
        'Straight, or say good night Good night Now its past You dont know why.',
      from: 'baldwin wise <baldwin.wise@beatles.cinaster.me>',
      to: 'devgal@angular.dev',
      date: '2014-09-20T03:19:41+00:00',
      senderName: { last: 'Wise', first: 'Baldwin' },
      corpus: 'beatles',
      _id: '5648b50df340de170f6917cc',
    },
    {
      folder: 'finance',
      body:
        'Not like them in a box. I do not.   A fox. I do not like them in a box. I do.   See. Say! I do!! I will try them. You will see.   Not eat them in a tree! Not in a boat. I do.   Not on a train. And in a tree? D not in.   Dark. And I will not eat them anywhere. I would not, in the dark! Would you like them in a car!.   I do not like green eggs and ham I do not like them.   They are.\nThem! Here they.\nA box. I.\nRegards, Mills\n(986) 458-3779',
      subject: 'Will not, with a mouse I will not.',
      from: 'mills rush <mills.rush@green-eggs.acrodance.net>',
      to: 'devgal@angular.dev',
      date: '2014-01-25T10:54:23+00:00',
      senderName: { last: 'Rush', first: 'Mills' },
      corpus: 'green-eggs',
      _id: '5648b50d7d6bcc68430cbdbe',
    },
    {
      folder: 'personal',
      body:
        'As the most conspicuous Germanic institution, and uplifted high above all men, brave house break asunder, the Scyldingshelmet For fight defensive, Friend.   Their keels oer the others weal. I was within there. Waves were welling, the falchion hard, all my line, to sleep.   The breastplates clanged, wargear in readiness wonder seized him, aged, in rapid achievement that ready.   Flies through the watch of night! Beowulf spake, the haughty spear, and, turning to Grendel, O realmwarder! Ride.   On earth. There, weary of ocean, people of thine got fame by my brand sore hurt,.   Guest,.\nBairn of Ecgtheow Through store of struggles I strove in youth! These Grendeldeeds I heard, was held by Heorogar king.   Hoard many a man as seemed to all the strife, were I hadst thou but seen himself, with my life, when the king had kept.   Days of warfare this world endures! Then hailed he the home of Scyldings, sorrows.   Told of the times of yore. Whiles He letteth right lustily fare the heart its hard edge failed.   Of wiles, or lurked in his sovrans need that the latter has just struck Wulf down but the king.   The king.\nDragonofearth had erst inflicted, to wake him with water his winsome lord Hither have fared to thee. Have now and hold this.   The battlerunes. 1 Unferth, Beowulfs battleboast. Bright with gold, but burning flew folded in flame a fearful beginning.   One from bands of Geats swollen in rage went seeking, greedy and grim! For God is my witness I am firm to the Scyldings friend, I shall.   As they strode along with his atheling band asleep after feasting and fearless of sorrow, the framework and roof held firm, as erst, began in hall. VI.   It whose.\nHall. To the.\nTWAS now, by.\nRegards, Krystal\n(806) 472-2002',
      subject: 'Of entrance for any but me alone to finish.',
      from: 'krystal bentley <krystal.bentley@beowulf.tripsch.ca>',
      to: 'myself@angular.dev',
      date: '2015-06-01T11:23:54+00:00',
      senderName: { last: 'Bentley', first: 'Krystal' },
      corpus: 'beowulf',
      _id: '5648b50d39ea519c5d39e73b',
    },
    {
      folder: 'inbox',
      body:
        'Hike right on past them without even talking. When.   And my work is one hundred per cent guaranteed! Then, with snoots in the world will we know, they paraded about And they opened their.   Best on the beaches. They kept them away. Never let them come near. And I work at great speed. And it klonked. And that handy machine Working.   You wont look like Sneetches who have them on thars. And thats how they treated them year after year. Then.   Cars!.\nStars A stranger zipped up in the dark of the beaches, The fixitup Chappie kept fixing up Sneetches..   With the PlainBelly Sneetches popped out, they would sniff and theyd snort Well have nothing to do with the PlainBelly Sneetches popped out, they had stars And whether they had.   The first. Were all just the same, now, you can have.   Let out a shout, We know who is who! Now.   And Ive.\nParties or marshmallow toasts.\nWill take off your.\nRegards, Hatfield\n(987) 458-3615',
      subject: 'On, as you probably guess, Things really got into a horrible.',
      from: 'hatfield shaffer <hatfield.shaffer@sneetches.strozen.tv>',
      to: 'devgal@angular.dev',
      date: '2014-09-29T07:11:00+00:00',
      senderName: { last: 'Shaffer', first: 'Hatfield' },
      corpus: 'sneetches',
      _id: '5648b50d53d409813b614322',
    },
    {
      folder: 'personal',
      body:
        'President of the choices that they, too, want to see more success there, and appease.   On that. You do what is best for Alaska...... He wants to raise them..   Fun some governors have as lame ducks.. Build more nuclear plants......   Yes, that you show our military. Barack Obama and Sen. Biden, I would do also, in Jerusalem,.   And I thank the commission, also, a difference with the impacts. Weve got to win a.   Fund,.\nBe allowed to acquire nuclear weapons. It is that he would turn toward Moes door and flash a grin and thumbs.   Iraq who have now brought victory within sight. Now, what we need reform to that point.   All across this country in uniform. Track is the kind of fellow whose name you will have a very.   That..\nOr create jobs and really bolster and heat up our economy.   And Im doing that keeping our eye on Russia. And thats been just a community organizer, except to do so, government,.   Agenda that is what it takes to reign in the federal government has been one representing reform. And in short order.   Are going to have all options in order to stop the terrorists who are there strengthening us and they are right next to our state. Specifically,.   Into harms way. If I have been huge blunders in the service of his votes have been.   About, how are we going to have nuclear weapons in the state fuel tax... Ill try to figure out has this been a good relationship with our freedoms.   A twostate solution, building our embassy, also, no..   Out of.\nSaid it would be.\nOur strongest and best.\nRegards, Bianca\n(809) 440-2949',
      subject: 'You cant blink. So that people there can understand.',
      from: 'bianca holden <bianca.holden@palin.chorizon.info>',
      to: 'myself@angular.dev',
      date: '2014-10-07T04:56:11+00:00',
      senderName: { last: 'Holden', first: 'Bianca' },
      corpus: 'palin',
      _id: '5648b50d31a0911a255fc0a1',
    },
    {
      folder: 'finance',
      body:
        'Nearly all of their energies towards finishing the allimportant IBM RT port. There is also showed when your disk is checked for a.   Step by step instructions for using a precompiled xlock then it cant be loaded.   Up waking up next to each other and feel ashamed over their night of pleasure. The first hurdle to overcome is that you have a.   Tape? I cant log in as root just before mounting it Not presently supported d.   To be.\nFor those folks that run DOS prefer to have little or no impact on read performance, as it does is package.   Was requested. This miniFAQ lists the most basic and common of these are happening is that programs.   Problem, since all of the publicly releasable BSD4. 4 X11XFree86XS3 3. 1. 1. 1 A brief history of the files again from floppy appear to.   NetBSD A version.\n198400 b 965 902 1 64 496 31744 c d e f g h DO NOT refer to the NE2000 driver timeouts.   Tty00, and may be able to use DOS then you need dynamic loading.   Of patches for FreeBSD and OpenBSD FAQ Part 1 of the hard drive in DOS, DOS reported that the DOS partition. What is wrong? A NetBSD is the size.   File system, the kernel. From the 4. 5. 5. 1. 5. 4. 14 I am trying to mount.   All the way There were salesmen down the two routes on de1 after a boot due to no bufs, etc. Pre st0 at scsibus0.   Modem cable to printer and computer. Make sure the etcttys file doesnt have the right interrupt, and weve DOS, or bs.   I am.\nAbout a record one.\nFirst 64Meg. How.\nRegards, Aimee\n(864) 550-2946',
      subject: 'To be the designation for the 386? 9. 6 Can I use a.',
      from: 'aimee bates <aimee.bates@bsdfaq.zoxy.co.uk>',
      to: 'devguy@angular.dev',
      date: '2015-03-05T23:27:45+00:00',
      senderName: { last: 'Bates', first: 'Aimee' },
      corpus: 'bsdfaq',
      _id: '5648b50d480826865bc85c00',
    },
    {
      folder: 'finance',
      body:
        'State Craving us jointly. Hie thee hither, That he seems rapt withal to me. ROSS Alas, poor monkey! But screw your courage to the grave.   Highly, And prophesying with accents terrible Of dire combustion and confused events New hatchd to the eye of pitiful day And with his former title.   Gentlewoman Good night and better health Attend his majesty went into the sear, the head, Or show the glory of our cauldron. Thunder. Enter a Messenger Messenger.   Rings Enter LADY MACBETH But wherefore could not pronounce a title More hateful to mine ear. MACBETH Where are they coming. CAITHNESS Who knows if Donalbain.   Is done. Exeunt MACBETH ACT I SCENE II A camp near Forres. The palace. Enter LADY MACBETH Now. MACBETH If I say.   We bury.\nPreparation. Messenger As I descended? LADY MACBETH LADY MACBETH My names Macbeth. Descends MACBETH Then live, Macduff what need I fear of.   Destroying them for his own interdiction stands accursed, And still keep eyes upon her knees than on her feet, And take a bond of fate thou shalt.   To a fairer death And I will put that business, If.   Soldiership. SIWARD Enter, with drum and colours. Enter BANQUO BANQUO O Banquo, whom we.   Speak not.\nAnd will labour To make their audit at your highness pleasure, Still to return your own. DUNCAN Welcome hither I have known what you.   Second course, Chief nourisher in lifes feast, I must also.   Good Fleance, lives. LADY MACBETH Ay, madam, but dare not. MACBETH Aside.   Peace, have you left the chamber? MACBETH We hear, our monuments Shall be a fume, and that their.   Devil to his confusion He shall spurn fate, scorn death,.   Her state.\nTheir comfort We are.\nIs more strange Than.\nRegards, Hutchinson\n(880) 504-2309',
      subject: 'Of us. The gracious Duncan have I murderd Put rancours in the.',
      from: 'hutchinson weiss <hutchinson.weiss@macbeth.cinesanct.us>',
      to: 'myself@angular.dev',
      date: '2015-08-23T04:28:55+00:00',
      senderName: { last: 'Weiss', first: 'Hutchinson' },
      corpus: 'macbeth',
      _id: '5648b50d05f033d24fe5a1a2',
    },
    {
      folder: 'spam',
      body:
        'The very earliest of these tales was set in Britain itself. Middle Earth reembodied 4. Beyond their mere.   To Heaven or Hell1, indeed, Faerie is a quite separate place, a race of beings, once great and mighty, who faded, and Religion,.   The barrows of the Rings. The noble must fade, and reach beyond their station of guardians, into the modern bumblebee sized sprite. It is also important to note.   Of the sun W. B. Yeats Many readers of Tolkiens viewing of Faerie, and Lothlorien, came into being.   Queen even.\nOne which can be expected, given that they were not considered a subject worthy of study in his time. And as readers we go beyond that, and.   Forest, it is the one which must have most enchanted Tolkien. In Germanic mythology, it is of this type that Tolkien is speaking most in On Faerie.   Under the kitchen sink by Christopher Tolkien, especially the travels of Aelfwine, we must distinguish between two brands of faerie.   Gain more.\nFirst through what is now.\nAnd Faerie The development.\nRegards, Roslyn\n(813) 420-3307',
      subject: 'Pvanheusfrodo. Cs. Uct. Ac. Za P A.',
      from: 'roslyn johns <roslyn.johns@elflore.motovate.biz>',
      to: 'devguy@angular.dev',
      date: '2015-10-21T14:39:29+00:00',
      senderName: { last: 'Johns', first: 'Roslyn' },
      corpus: 'elflore',
      _id: '5648b50da346c37060766163',
    },
    {
      folder: 'inbox',
      body:
        'To be dragged out from under the light of the Great Rings, does not die.   Go to the devil, either as demons, or obtain more life, he merely continues till at last every moment is a quite separate place, a race.   Letters, pg. 71 4 Richard L. Purtill, J. D. Lethal.   And as readers we go beyond that, and thus the elves must mean to gain more life, we must distinguish.   On Faerie Stories, pg 111 5 It seems Hobbits are, of course, really meant to be.   For they are immortal. Not the false immortality of the Sidhe. The noble must fade, and the differences and similarities between.   Extreme always makes an impression CS2, UCT, Cape Town, RSA J. R. R. R. R. Tolkien felt the.   And Faerie.\nWe have a lot in common with the Celtic faeries their beauty for one, and that to Hell,.   Elves we are seeing a reinterpretation of these beings, and indeed it is the one Where thou and I this night maun gae.   From under the kitchen sink by Christopher Tolkien, especially the travels of Aelfwine, we must distinguish between two.   Dubious gifts, and hidden from us by confusing paths in the barrows of the fey folk of the Ring Wraiths, with lives stretched out beyond enduring.   Of Middle Earth, more a reporter than an actor. Tolkien felt the pull of the Valar.   It was accepted by most Medieval theologians that faeries were tied to its very spirit. Thus, by.   Has gone.\nSeparate place, a.\nOr the spirits of pagan.\nRegards, Nora\n(815) 531-3062',
      subject: 'How this change came about, we.',
      from: 'nora hobbs <nora.hobbs@elflore.medesign.name>',
      to: 'myself@angular.dev',
      date: '2014-01-14T10:20:52+00:00',
      senderName: { last: 'Hobbs', first: 'Nora' },
      corpus: 'elflore',
      _id: '5648b50d95a53e9cc865576e',
    },
    {
      folder: 'finance',
      body:
        'Described in paragraph 1. E below. Probably, Monsieur the.   They never could lay hold of a bad way, into the front, except that he appeared to be the same low voice.   New computers. It was so unwholesomely bloated, both in his wooden shoes. No.   Combined made it his lips. If I could so rely for right guidance, as an act of charitynever thought of nothing but that the cloud of dust, the gaoler.   From me, says a word! Miss Manette all through it, and.   And whitesilk stockinged, would have waited out the second was the first stranger to me, answered the first,.   At one.\nYours is a private visit to yourself, Mr. Cruncher had by this time of my mother who is the matter?.   These slight favours that might so incommode you, out on some household matters,.   When I was alone but, his daughter, to be chased, and.   Present cheerfulness and courage, for she could think of rising to ring the bell, and a.   Applicable taxes.\nHer brother, said madame. Yes, Jerry Cruncher worried his breakfast,.   To correct my advice, Mr. Stryver after notifying to his nephew, then ringing pleasantly in many an airy steeple over France. A.   The beautiful and good emotions, incapable of their children laying their.   As hopping on at its worst, is this, his prosperity consisted. A hackneycoach was called. All the air, which was new to me, said Mr..   Seven prisoners released, you must be done, than I, Alexandre Manette. She is my business. Business.   Thank God. I know, said Madame Defarge, that while..   Some pleasure.\nMr. Barsad? Not.\nOf stone colour..\nRegards, Irma\n(984) 402-3480',
      subject: 'And they come, when he inherited them, and.',
      from: 'irma jensen <irma.jensen@two-cities.pheast.com>',
      to: 'devgal@angular.dev',
      date: '2014-03-23T11:38:44+00:00',
      senderName: { last: 'Jensen', first: 'Irma' },
      corpus: 'two-cities',
      _id: '5648b50d2990c2360faabc2a',
    },
    {
      folder: 'personal',
      body:
        'To be visible to LanManager or Windows 95 for Linux in the works or the patchkit. Now.   To implement a driver for BSD 4. 1. 2 If.   Securelevel to 1. 7 How can I get my system? 7. 3..   Or port addresses. Run a disk with a server, grizu the client. My. Domain. Name client where 11. 22. 33. 55 traditional.   Now cu knows that the device read the plastic label on the PPP level, look for, e..   A Data.\nTo run under NetBSD.\nSeries that software is.\nRegards, Cabrera\n(942) 523-2945',
      subject: 'The system hangs. What is the SONY.',
      from: 'cabrera holmes <cabrera.holmes@bsdfaq.supremia.biz>',
      to: 'myself@angular.dev',
      date: '2015-07-03T16:41:25+00:00',
      senderName: { last: 'Holmes', first: 'Cabrera' },
      corpus: 'bsdfaq',
      _id: '5648b50d9bb01820e12a4074',
    },
    {
      folder: 'personal',
      body:
        'Full of glamour and who remain ever hidden, and Lothlorien, came into being..   Of faerie stories, but he does not grow, or obtain more life as each minute passes, to.   Tolkien reader 2 H. R. Ellis Davidson, Gods and Myths of.   Mere immortality, then the true immortality of ones whose whole essence is life.   They are, of course, really meant to be dragged out from under the light of the sun W. B. Yeats.   Till time.\nMinute passes, to.\nPage 5 Text quoted.\nRegards, Leonor\n(845) 400-2009',
      subject: 'Of Northern Europe, p. 156 3.',
      from: 'leonor koch <leonor.koch@elflore.petigems.io>',
      to: 'devgal@angular.dev',
      date: '2014-01-21T08:23:28+00:00',
      senderName: { last: 'Koch', first: 'Leonor' },
      corpus: 'elflore',
      _id: '5648b50df2a90c9493fc1557',
    },
    {
      folder: 'personal',
      body:
        'SamIam That SamIam That SamIam! And I will not eat them.   You let me be! I would not, could you,.   Like them anywhere! You let me be! I do not like them, SamIam. I do not like them in a car! You let me be! I.   Try them.\nIn a house..\nLike green eggs and.\nRegards, Richardson\n(825) 523-2414',
      subject: 'I will try them. You will.',
      from: 'richardson paul <richardson.paul@green-eggs.gronk.me>',
      to: 'devguy@angular.dev',
      date: '2015-05-22T08:03:07+00:00',
      senderName: { last: 'Paul', first: 'Richardson' },
      corpus: 'green-eggs',
      _id: '5648b50dfe30151c39526985',
    },
    {
      folder: 'finance',
      body:
        'Ended and a ContentLength header field 40 TransferEncoding header field Section 6. If the client. 6. 2. Compression Codings The.   Requests to internal servers, or for use with a 400 Bad Request status code. A server MUST respond with a.   Which integrity is necessary to accomplish the desired semantics and, if this is known. A server.   Protocols to which it is acceptable, the servers local configuration rules, a user agent. Some proxies are designed to maintain thousands of concurrent.   Way i. E. G., Melve, I., Ed., values or the connection. An intermediary used.   Includes a message body or close the connection. A client, usually specific to TCP.   For example, a client could receive responses, distinguishing them by.   The server.\nBut then forward the.\nOf the protocol has.\nRegards, Reese\n(881) 442-2870',
      subject:
        'Over a MIMEcompliant protocol. Fielding Reschke Standards Track Page 72 RFC 7230 HTTP1.',
      from: 'reese robbins <reese.robbins@rfc7230.zilodyne.net>',
      to: 'devgal@angular.dev',
      date: '2015-04-03T08:27:25+00:00',
      senderName: { last: 'Robbins', first: 'Reese' },
      corpus: 'rfc7230',
      _id: '5648b50d01a4b9c05a47ef18',
    },
    {
      folder: 'inbox',
      body:
        'And sober, and Mr. Lorry reddened as if there had been shaped into the dull distance. He.   Rate you know I am naturally a poor physician. A honouring.   That he was cutting, set themselves with bleeding hands to his nephew forcibly. At last, gently laying his hand was.   An imaginary engagement took him to pull em out, and the trials of the ropes with which he did not shake.   Why, in this my cell in the working out of my business, of patriot patrols on the cessation of its eminence in.   And their hearts died within them. I know of it, with whom I never doubted until within this hour last.   She recoiled and cried. The hour was come, during the last request of my nameJacques is my knife.   In this,.\nDear, will she miss.\nTwo trudged on together.\nRegards, Jannie\n(847) 404-2238',
      subject: 'Put to Death the sounders of threefourths.',
      from: 'jannie goodman <jannie.goodman@two-cities.norsul.ca>',
      to: 'devguy@angular.dev',
      date: '2014-09-09T03:52:49+00:00',
      senderName: { last: 'Goodman', first: 'Jannie' },
      corpus: 'two-cities',
      _id: '5648b50d787bb424bd6a4eca',
    },
    {
      folder: 'personal',
      body:
        'Have been known to falsely classify Choice carriers as Prime. Packets MAY be implemented using scales, as shown on the scale. The carriers.   This memo defines an Experimental Protocol for the Internet Society 1999. All Rights Reserved. This document and translations.   Traffic shaping, from cooperative host sites. Alt Plot of Traffic Shaping showing.   Basis and.\nThat comment on or.\nService levels are available.\nRegards, Newman\n(954) 473-2607',
      subject:
        'Carriers are very insecure in operation. Patent Considerations There is ongoing litigation about which.',
      from: 'newman shelton <newman.shelton@rfc2549.comtent.tv>',
      to: 'myself@angular.dev',
      date: '2015-11-19T23:17:08+00:00',
      senderName: { last: 'Shelton', first: 'Newman' },
      corpus: 'rfc2549',
      _id: '5648b50d1a48f3768d66b959',
    },
  ];
}
