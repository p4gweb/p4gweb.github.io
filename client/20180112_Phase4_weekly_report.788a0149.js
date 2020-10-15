import{S as e,i as a,s as o,e as t,t as r,a as n,c as s,b as i,d as h,f as d,g as l,h as c,j as u,k as f,n as p}from"./client.f328899a.js";function g(e){let a,o,g,m,w,b,y,v,k,E,P,T,D,A,S,O,I,G,C,L,B,H,N,x,j,W,z,F,R,K,V,q,M,U,Y,J,Q,X,_,Z,$,ee,ae,oe,te,re,ne,se,ie,he,de,le,ce,ue,fe,pe,ge,me,we,be,ye,ve,ke,Ee,Pe,Te,De,Ae,Se,Oe,Ie,Ge,Ce,Le,Be,He,Ne,xe,je,We,ze,Fe,Re,Ke,Ve,qe,Me,Ue,Ye,Je,Qe,Xe,_e,Ze,$e,ea,aa,oa,ta,ra,na,sa,ia,ha,da,la,ca,ua,fa,pa,ga,ma,wa,ba,ya,va,ka,Ea,Pa,Ta,Da,Aa,Sa,Oa,Ia,Ga,Ca,La,Ba,Ha,Na,xa,ja,Wa,za,Fa,Ra,Ka,Va,qa,Ma,Ua,Ya,Ja,Qa,Xa,_a,Za,$a,eo,ao,oo,to,ro,no,so,io,ho,lo,co;return{c(){a=t("p"),o=t("a"),g=r("https://www.youtube.com/watch?v=pxxBg3oSmaQ"),m=n(),w=t("p"),b=r("Phase 4 Ground weekly report :+)"),y=n(),v=t("p"),k=r("An intro to #badgelife, update on progress on our badge efforts, human radio interface proposal, and a demo of the first version bound for JOCO."),E=n(),P=t("p"),T=r("Rectangular printed conferences badges of paper or laminated plastic are a familiar sight at conventions and meetings of all sizes. Printed and usually worn with a clip or lanyard, conference badges often serve as an event ticket."),D=n(),A=t("p"),S=r("By 2009, several large technical conferences offered hackable electronic badges as part of registration, like these from DEFCON."),O=n(),I=t("p"),G=r("Ranging from extremely simple LED blinky badges all the way up to fully functional cameras, radios, game systems, and more, badge engineering, or #badgelife, is another way to get involved in DIY and maker movement electronics."),C=n(),L=t("p"),B=r("Not all recent badges are electronic. One of these is a white vinyl 45 record. The audio track was an encoded message that was part of a puzzle participants could solve at the conference."),H=n(),N=t("p"),x=r("This is a badge from the car hacking village at DEFCON. This badge plugs into the OBD-II port and talks to your car.  "),j=t("a"),W=r("https://github.com/lanrat/CHVBadge_16"),z=n(),F=t("p"),R=r("This is a prototype badge for development of the JOCO version of the badge we are working on. Board by Steve Conklin."),K=n(),V=t("p"),q=r("Kits for the simplest electronic badge, the blinky badge. It’s just LEDs and batteries."),M=n(),U=t("p"),Y=r("The badge from the 2017 Hackaday Superconference was an expandable working digital camera. Details: "),J=t("a"),Q=r("https://hackaday.com/2017/10/11/building-the-hackaday-superconference-badge/"),X=n(),_=t("p"),Z=r("Here’s the Layer One conference badge with the game controller that came with it. Details: "),$=t("a"),ee=r("https://hackaday.io/project/13262-layerone-2017"),ae=n(),oe=t("p"),te=r("Some badges are more art than electronic. This skull themed badge had a Intel Quark D2000, eight switches, and 5 LEDs. It put out some clues on the serial port and lit up with the Konami Code, but to make it do anything else you need to reprogram it, and the Quark was then discontinued by Intel."),re=n(),ne=t("p"),se=r("The first and second Bender Badges can be seen here details at "),ie=t("a"),he=r("https://hackaday.io/project/19121-andxor-dc25-badge"),de=r(" this open source badge is what our badges are based upon, and we cannot say thank you enough to the AND!XOR team."),le=n(),ce=t("p"),ue=r("Here’s set of badges from the r00tz conference, which is for kids. It’s held at DEFCON. These badges are packed with features. Details: "),fe=t("a"),pe=r("https://github.com/HelloTechie/r00tzbadge"),ge=n(),me=t("p"),we=r("Check out this working prototype of the first version of our ongoing badge effort! JOCO pirate monkey theme."),be=n(),ye=t("p"),ve=r("Here’s an example of an entry in a hackable badge contest. This is our DEFCON17 badge turned into a geiger counter, where detected radiation was used for a one-time pad cryptographic link over ZigBee. A demo "),ke=t("a"),Ee=r("https://www.youtube.com/watch?v=2_gEeffx8t8"),Pe=r(" and writeup at "),Te=t("a"),De=r("http://bigideatrouble.com/dc17badgehack.pdf"),Ae=n(),Se=t("p"),Oe=r("Here’s another badge hack with the DEFCON18 badge. The modified badge is on the left and the stock badge is on the right."),Ie=n(),Ge=t("p"),Ce=r("So what’s the point of doing a badge? Having fun and learning how to work together, outreach and DIY maker awareness and encouragement, and also because a badge can be a radio accessory and part of the Human Radio Interface."),Le=n(),Be=t("p"),He=r("One of the functions of the Trans-Ionospheric is to show channel acquisition health and status. Here’s where we are today with this concept."),Ne=n(),xe=t("p"),je=r("Your radio listens for a list of channel assignments that are transmitted from the Groundsat in order to know which uplink channels are free and can be accessed. A lot has to go right to get a channel assignment. Knowing how far the radio is getting into the process gives you better visibility and control."),We=n(),ze=t("p"),Fe=r("These are proposals. What we are talking about can also work for an HTML skin, a physical radio layout, and other UI expressions. As always, comment and critique welcomed and encouraged."),Re=n(),Ke=t("p"),Ve=r("If you see the first LED lit, that means you have symbol timing. The second LED means you have frame timing. The third LED means you have successfully received and demodulated the physical layer header. This means that a lot has already happened. You’ve got symbol timing and frame timing and you’ve demodulated the pi/2 BPSK header and now you know how to decode the rest of the payload, and you know where to look for the next physical layer header."),qe=n(),Me=t("p"),Ue=r("Now we select an unused channel and transmit our request to use the downlink, which includes a signal to noise report. How well we can hear the downlink is used by the payload to determine how much forward error correction coding you need."),Ye=n(),Je=t("p"),Qe=r("At this time, we might be identifying ourselves to the payload and asking to use it. I say might be, because one can always just listen. When you want to transmit you need to get a downlink channel. The choice of how long to reserve an unused channel is a good one. Should this process be done for every uplink frame? Or should there be sessions that time out?"),Xe=n(),_e=t("p"),Ze=r("The registration process can range from everyone automatically gets access through the transmitter to full authentication and authorization with list management, where only pre-approved operators can use it."),$e=n(),ea=t("p"),aa=r("The particular policy is up to the operator of the Groundsat or payload. Perhaps the first LED would be request transmitted , the second would be successful authentication, and the third successful authorization. Once you hear yourself in the downlink channel assignment list, then you are good to go and can transmit."),oa=n(),ta=t("p"),ra=r("The payload is using the downlink signal to noise value that you report assign you modulation and coding, so the LEDs along the top can give you an indication of how good you’re doing, if you have any messages, what mode we’re in, room requests, and more."),na=n(),sa=t("p"),ia=r("We need to make a software prototype of this type of user interface. Can you do it in python? In HTML5? In Erlang? No I’m not kidding. Sign up, submit it, and let’s show it off! The user interface is the product, so let’s see if this idea works for us."),ha=n(),da=t("p"),la=r("Updates from Firmwarez and Steve Conklin follow!"),ca=n(),ua=t("p"),fa=r("AMSAT Phase 4 Ground home page "),pa=t("a"),ga=r("https://phase4ground.github.io/"),ma=n(),wa=t("p"),ba=r("We are Phase 4 Ground and our mission is to implement an open source version of the DVB-S2 and DVB-S2X and Generic Stream Encapsulation (GSE) protocols for amateur radio, for both space and ground. The project includes the radios and a central server, or Groundsat. It’s named Groundsat because it’s a satellite simulator on the ground, providing the same functions a broadband microwave payload would in order to create a network."),ya=n(),va=t("p"),ka=r("All the Digital Video Broadcasting protocols that we are working with can be found for free at "),Ea=t("a"),Pa=r("https://www.dvb.org/"),Ta=r(" and from links on our homepage."),Da=n(),Aa=t("p"),Sa=r("Note that GSE allows any digital data to be transmitted. We are not implementing a system limited to MPEG video."),Oa=n(),Ia=t("p"),Ga=r("DVB world conference is coming up! Anyone near Warsaw? That’s where it’s at for 2018."),Ca=n(),La=t("p"),Ba=r("Our reference design is in GNU Radio and we have some of the blocks done. We need plenty more and upcoming videos will go into detail for each one."),Ha=n(),Na=t("p"),xa=r("Learn all about GNU Radio here: "),ja=t("a"),Wa=r("https://www.gnuradio.org/"),za=n(),Fa=t("p"),Ra=r("Engineering for Phase 4 Ground is done primarily on our email list and Slack accounts."),Ka=n(),Va=t("p"),qa=r("We have a YouTube playlist at "),Ma=t("a"),Ua=r("https://www.youtube.com/playlist?list=PLavdGnjBLuiX97DAKk32NJ1bCF1a0cv01"),Ya=r(" that includes our video reports and videos that are of use or interest to Phase 4 Ground. Please subscribe and let us know what you’d like to hear about most."),Ja=n(),Qa=t("p"),Xa=r("Phase 4 Space home page "),_a=t("a"),Za=r("https://phase4space.github.io/"),$a=n(),eo=t("p"),ao=r("Phase 4 Space is an open source public domain project for broadband microwave amateur radio satellites because we want a lot of payloads to talk to! We’ll be using two wonderful open source resources to start. AO-10 blueprints and UPSat, the open source satellite currently operational, from Libre Space Foundation."),oo=n(),to=t("p"),ro=r("To volunteer directly for either, visit the AMSAT volunteer landing page "),no=t("a"),so=r("https://www.amsat.org/volunteer-for-amsat/"),io=r(" or send an email "),ho=t("a"),lo=r("w5nyv@arrl.net"),co=r(" to get started!"),this.h()},l(e){a=s(e,"P",{});var t=i(a);o=s(t,"A",{href:!0,rel:!0});var r=i(o);g=h(r,"https://www.youtube.com/watch?v=pxxBg3oSmaQ"),r.forEach(d),t.forEach(d),m=l(e),w=s(e,"P",{});var n=i(w);b=h(n,"Phase 4 Ground weekly report :+)"),n.forEach(d),y=l(e),v=s(e,"P",{});var c=i(v);k=h(c,"An intro to #badgelife, update on progress on our badge efforts, human radio interface proposal, and a demo of the first version bound for JOCO."),c.forEach(d),E=l(e),P=s(e,"P",{});var u=i(P);T=h(u,"Rectangular printed conferences badges of paper or laminated plastic are a familiar sight at conventions and meetings of all sizes. Printed and usually worn with a clip or lanyard, conference badges often serve as an event ticket."),u.forEach(d),D=l(e),A=s(e,"P",{});var f=i(A);S=h(f,"By 2009, several large technical conferences offered hackable electronic badges as part of registration, like these from DEFCON."),f.forEach(d),O=l(e),I=s(e,"P",{});var p=i(I);G=h(p,"Ranging from extremely simple LED blinky badges all the way up to fully functional cameras, radios, game systems, and more, badge engineering, or #badgelife, is another way to get involved in DIY and maker movement electronics."),p.forEach(d),C=l(e),L=s(e,"P",{});var uo=i(L);B=h(uo,"Not all recent badges are electronic. One of these is a white vinyl 45 record. The audio track was an encoded message that was part of a puzzle participants could solve at the conference."),uo.forEach(d),H=l(e),N=s(e,"P",{});var fo=i(N);x=h(fo,"This is a badge from the car hacking village at DEFCON. This badge plugs into the OBD-II port and talks to your car.  "),j=s(fo,"A",{href:!0,rel:!0});var po=i(j);W=h(po,"https://github.com/lanrat/CHVBadge_16"),po.forEach(d),fo.forEach(d),z=l(e),F=s(e,"P",{});var go=i(F);R=h(go,"This is a prototype badge for development of the JOCO version of the badge we are working on. Board by Steve Conklin."),go.forEach(d),K=l(e),V=s(e,"P",{});var mo=i(V);q=h(mo,"Kits for the simplest electronic badge, the blinky badge. It’s just LEDs and batteries."),mo.forEach(d),M=l(e),U=s(e,"P",{});var wo=i(U);Y=h(wo,"The badge from the 2017 Hackaday Superconference was an expandable working digital camera. Details: "),J=s(wo,"A",{href:!0,rel:!0});var bo=i(J);Q=h(bo,"https://hackaday.com/2017/10/11/building-the-hackaday-superconference-badge/"),bo.forEach(d),wo.forEach(d),X=l(e),_=s(e,"P",{});var yo=i(_);Z=h(yo,"Here’s the Layer One conference badge with the game controller that came with it. Details: "),$=s(yo,"A",{href:!0,rel:!0});var vo=i($);ee=h(vo,"https://hackaday.io/project/13262-layerone-2017"),vo.forEach(d),yo.forEach(d),ae=l(e),oe=s(e,"P",{});var ko=i(oe);te=h(ko,"Some badges are more art than electronic. This skull themed badge had a Intel Quark D2000, eight switches, and 5 LEDs. It put out some clues on the serial port and lit up with the Konami Code, but to make it do anything else you need to reprogram it, and the Quark was then discontinued by Intel."),ko.forEach(d),re=l(e),ne=s(e,"P",{});var Eo=i(ne);se=h(Eo,"The first and second Bender Badges can be seen here details at "),ie=s(Eo,"A",{href:!0,rel:!0});var Po=i(ie);he=h(Po,"https://hackaday.io/project/19121-andxor-dc25-badge"),Po.forEach(d),de=h(Eo," this open source badge is what our badges are based upon, and we cannot say thank you enough to the AND!XOR team."),Eo.forEach(d),le=l(e),ce=s(e,"P",{});var To=i(ce);ue=h(To,"Here’s set of badges from the r00tz conference, which is for kids. It’s held at DEFCON. These badges are packed with features. Details: "),fe=s(To,"A",{href:!0,rel:!0});var Do=i(fe);pe=h(Do,"https://github.com/HelloTechie/r00tzbadge"),Do.forEach(d),To.forEach(d),ge=l(e),me=s(e,"P",{});var Ao=i(me);we=h(Ao,"Check out this working prototype of the first version of our ongoing badge effort! JOCO pirate monkey theme."),Ao.forEach(d),be=l(e),ye=s(e,"P",{});var So=i(ye);ve=h(So,"Here’s an example of an entry in a hackable badge contest. This is our DEFCON17 badge turned into a geiger counter, where detected radiation was used for a one-time pad cryptographic link over ZigBee. A demo "),ke=s(So,"A",{href:!0,rel:!0});var Oo=i(ke);Ee=h(Oo,"https://www.youtube.com/watch?v=2_gEeffx8t8"),Oo.forEach(d),Pe=h(So," and writeup at "),Te=s(So,"A",{href:!0,rel:!0});var Io=i(Te);De=h(Io,"http://bigideatrouble.com/dc17badgehack.pdf"),Io.forEach(d),So.forEach(d),Ae=l(e),Se=s(e,"P",{});var Go=i(Se);Oe=h(Go,"Here’s another badge hack with the DEFCON18 badge. The modified badge is on the left and the stock badge is on the right."),Go.forEach(d),Ie=l(e),Ge=s(e,"P",{});var Co=i(Ge);Ce=h(Co,"So what’s the point of doing a badge? Having fun and learning how to work together, outreach and DIY maker awareness and encouragement, and also because a badge can be a radio accessory and part of the Human Radio Interface."),Co.forEach(d),Le=l(e),Be=s(e,"P",{});var Lo=i(Be);He=h(Lo,"One of the functions of the Trans-Ionospheric is to show channel acquisition health and status. Here’s where we are today with this concept."),Lo.forEach(d),Ne=l(e),xe=s(e,"P",{});var Bo=i(xe);je=h(Bo,"Your radio listens for a list of channel assignments that are transmitted from the Groundsat in order to know which uplink channels are free and can be accessed. A lot has to go right to get a channel assignment. Knowing how far the radio is getting into the process gives you better visibility and control."),Bo.forEach(d),We=l(e),ze=s(e,"P",{});var Ho=i(ze);Fe=h(Ho,"These are proposals. What we are talking about can also work for an HTML skin, a physical radio layout, and other UI expressions. As always, comment and critique welcomed and encouraged."),Ho.forEach(d),Re=l(e),Ke=s(e,"P",{});var No=i(Ke);Ve=h(No,"If you see the first LED lit, that means you have symbol timing. The second LED means you have frame timing. The third LED means you have successfully received and demodulated the physical layer header. This means that a lot has already happened. You’ve got symbol timing and frame timing and you’ve demodulated the pi/2 BPSK header and now you know how to decode the rest of the payload, and you know where to look for the next physical layer header."),No.forEach(d),qe=l(e),Me=s(e,"P",{});var xo=i(Me);Ue=h(xo,"Now we select an unused channel and transmit our request to use the downlink, which includes a signal to noise report. How well we can hear the downlink is used by the payload to determine how much forward error correction coding you need."),xo.forEach(d),Ye=l(e),Je=s(e,"P",{});var jo=i(Je);Qe=h(jo,"At this time, we might be identifying ourselves to the payload and asking to use it. I say might be, because one can always just listen. When you want to transmit you need to get a downlink channel. The choice of how long to reserve an unused channel is a good one. Should this process be done for every uplink frame? Or should there be sessions that time out?"),jo.forEach(d),Xe=l(e),_e=s(e,"P",{});var Wo=i(_e);Ze=h(Wo,"The registration process can range from everyone automatically gets access through the transmitter to full authentication and authorization with list management, where only pre-approved operators can use it."),Wo.forEach(d),$e=l(e),ea=s(e,"P",{});var zo=i(ea);aa=h(zo,"The particular policy is up to the operator of the Groundsat or payload. Perhaps the first LED would be request transmitted , the second would be successful authentication, and the third successful authorization. Once you hear yourself in the downlink channel assignment list, then you are good to go and can transmit."),zo.forEach(d),oa=l(e),ta=s(e,"P",{});var Fo=i(ta);ra=h(Fo,"The payload is using the downlink signal to noise value that you report assign you modulation and coding, so the LEDs along the top can give you an indication of how good you’re doing, if you have any messages, what mode we’re in, room requests, and more."),Fo.forEach(d),na=l(e),sa=s(e,"P",{});var Ro=i(sa);ia=h(Ro,"We need to make a software prototype of this type of user interface. Can you do it in python? In HTML5? In Erlang? No I’m not kidding. Sign up, submit it, and let’s show it off! The user interface is the product, so let’s see if this idea works for us."),Ro.forEach(d),ha=l(e),da=s(e,"P",{});var Ko=i(da);la=h(Ko,"Updates from Firmwarez and Steve Conklin follow!"),Ko.forEach(d),ca=l(e),ua=s(e,"P",{});var Vo=i(ua);fa=h(Vo,"AMSAT Phase 4 Ground home page "),pa=s(Vo,"A",{href:!0,rel:!0});var qo=i(pa);ga=h(qo,"https://phase4ground.github.io/"),qo.forEach(d),Vo.forEach(d),ma=l(e),wa=s(e,"P",{});var Mo=i(wa);ba=h(Mo,"We are Phase 4 Ground and our mission is to implement an open source version of the DVB-S2 and DVB-S2X and Generic Stream Encapsulation (GSE) protocols for amateur radio, for both space and ground. The project includes the radios and a central server, or Groundsat. It’s named Groundsat because it’s a satellite simulator on the ground, providing the same functions a broadband microwave payload would in order to create a network."),Mo.forEach(d),ya=l(e),va=s(e,"P",{});var Uo=i(va);ka=h(Uo,"All the Digital Video Broadcasting protocols that we are working with can be found for free at "),Ea=s(Uo,"A",{href:!0,rel:!0});var Yo=i(Ea);Pa=h(Yo,"https://www.dvb.org/"),Yo.forEach(d),Ta=h(Uo," and from links on our homepage."),Uo.forEach(d),Da=l(e),Aa=s(e,"P",{});var Jo=i(Aa);Sa=h(Jo,"Note that GSE allows any digital data to be transmitted. We are not implementing a system limited to MPEG video."),Jo.forEach(d),Oa=l(e),Ia=s(e,"P",{});var Qo=i(Ia);Ga=h(Qo,"DVB world conference is coming up! Anyone near Warsaw? That’s where it’s at for 2018."),Qo.forEach(d),Ca=l(e),La=s(e,"P",{});var Xo=i(La);Ba=h(Xo,"Our reference design is in GNU Radio and we have some of the blocks done. We need plenty more and upcoming videos will go into detail for each one."),Xo.forEach(d),Ha=l(e),Na=s(e,"P",{});var _o=i(Na);xa=h(_o,"Learn all about GNU Radio here: "),ja=s(_o,"A",{href:!0,rel:!0});var Zo=i(ja);Wa=h(Zo,"https://www.gnuradio.org/"),Zo.forEach(d),_o.forEach(d),za=l(e),Fa=s(e,"P",{});var $o=i(Fa);Ra=h($o,"Engineering for Phase 4 Ground is done primarily on our email list and Slack accounts."),$o.forEach(d),Ka=l(e),Va=s(e,"P",{});var et=i(Va);qa=h(et,"We have a YouTube playlist at "),Ma=s(et,"A",{href:!0,rel:!0});var at=i(Ma);Ua=h(at,"https://www.youtube.com/playlist?list=PLavdGnjBLuiX97DAKk32NJ1bCF1a0cv01"),at.forEach(d),Ya=h(et," that includes our video reports and videos that are of use or interest to Phase 4 Ground. Please subscribe and let us know what you’d like to hear about most."),et.forEach(d),Ja=l(e),Qa=s(e,"P",{});var ot=i(Qa);Xa=h(ot,"Phase 4 Space home page "),_a=s(ot,"A",{href:!0,rel:!0});var tt=i(_a);Za=h(tt,"https://phase4space.github.io/"),tt.forEach(d),ot.forEach(d),$a=l(e),eo=s(e,"P",{});var rt=i(eo);ao=h(rt,"Phase 4 Space is an open source public domain project for broadband microwave amateur radio satellites because we want a lot of payloads to talk to! We’ll be using two wonderful open source resources to start. AO-10 blueprints and UPSat, the open source satellite currently operational, from Libre Space Foundation."),rt.forEach(d),oo=l(e),to=s(e,"P",{});var nt=i(to);ro=h(nt,"To volunteer directly for either, visit the AMSAT volunteer landing page "),no=s(nt,"A",{href:!0,rel:!0});var st=i(no);so=h(st,"https://www.amsat.org/volunteer-for-amsat/"),st.forEach(d),io=h(nt," or send an email "),ho=s(nt,"A",{href:!0});var it=i(ho);lo=h(it,"w5nyv@arrl.net"),it.forEach(d),co=h(nt," to get started!"),nt.forEach(d),this.h()},h(){c(o,"href","https://www.youtube.com/watch?v=pxxBg3oSmaQ"),c(o,"rel","nofollow"),c(j,"href","https://github.com/lanrat/CHVBadge_16"),c(j,"rel","nofollow"),c(J,"href","https://hackaday.com/2017/10/11/building-the-hackaday-superconference-badge/"),c(J,"rel","nofollow"),c($,"href","https://hackaday.io/project/13262-layerone-2017"),c($,"rel","nofollow"),c(ie,"href","https://hackaday.io/project/19121-andxor-dc25-badge"),c(ie,"rel","nofollow"),c(fe,"href","https://github.com/HelloTechie/r00tzbadge"),c(fe,"rel","nofollow"),c(ke,"href","https://www.youtube.com/watch?v=2_gEeffx8t8"),c(ke,"rel","nofollow"),c(Te,"href","http://bigideatrouble.com/dc17badgehack.pdf"),c(Te,"rel","nofollow"),c(pa,"href","https://phase4ground.github.io/"),c(pa,"rel","nofollow"),c(Ea,"href","https://www.dvb.org/"),c(Ea,"rel","nofollow"),c(ja,"href","https://www.gnuradio.org/"),c(ja,"rel","nofollow"),c(Ma,"href","https://www.youtube.com/playlist?list=PLavdGnjBLuiX97DAKk32NJ1bCF1a0cv01"),c(Ma,"rel","nofollow"),c(_a,"href","https://phase4space.github.io/"),c(_a,"rel","nofollow"),c(no,"href","https://www.amsat.org/volunteer-for-amsat/"),c(no,"rel","nofollow"),c(ho,"href","mailto:w5nyv@arrl.net")},m(e,t){u(e,a,t),f(a,o),f(o,g),u(e,m,t),u(e,w,t),f(w,b),u(e,y,t),u(e,v,t),f(v,k),u(e,E,t),u(e,P,t),f(P,T),u(e,D,t),u(e,A,t),f(A,S),u(e,O,t),u(e,I,t),f(I,G),u(e,C,t),u(e,L,t),f(L,B),u(e,H,t),u(e,N,t),f(N,x),f(N,j),f(j,W),u(e,z,t),u(e,F,t),f(F,R),u(e,K,t),u(e,V,t),f(V,q),u(e,M,t),u(e,U,t),f(U,Y),f(U,J),f(J,Q),u(e,X,t),u(e,_,t),f(_,Z),f(_,$),f($,ee),u(e,ae,t),u(e,oe,t),f(oe,te),u(e,re,t),u(e,ne,t),f(ne,se),f(ne,ie),f(ie,he),f(ne,de),u(e,le,t),u(e,ce,t),f(ce,ue),f(ce,fe),f(fe,pe),u(e,ge,t),u(e,me,t),f(me,we),u(e,be,t),u(e,ye,t),f(ye,ve),f(ye,ke),f(ke,Ee),f(ye,Pe),f(ye,Te),f(Te,De),u(e,Ae,t),u(e,Se,t),f(Se,Oe),u(e,Ie,t),u(e,Ge,t),f(Ge,Ce),u(e,Le,t),u(e,Be,t),f(Be,He),u(e,Ne,t),u(e,xe,t),f(xe,je),u(e,We,t),u(e,ze,t),f(ze,Fe),u(e,Re,t),u(e,Ke,t),f(Ke,Ve),u(e,qe,t),u(e,Me,t),f(Me,Ue),u(e,Ye,t),u(e,Je,t),f(Je,Qe),u(e,Xe,t),u(e,_e,t),f(_e,Ze),u(e,$e,t),u(e,ea,t),f(ea,aa),u(e,oa,t),u(e,ta,t),f(ta,ra),u(e,na,t),u(e,sa,t),f(sa,ia),u(e,ha,t),u(e,da,t),f(da,la),u(e,ca,t),u(e,ua,t),f(ua,fa),f(ua,pa),f(pa,ga),u(e,ma,t),u(e,wa,t),f(wa,ba),u(e,ya,t),u(e,va,t),f(va,ka),f(va,Ea),f(Ea,Pa),f(va,Ta),u(e,Da,t),u(e,Aa,t),f(Aa,Sa),u(e,Oa,t),u(e,Ia,t),f(Ia,Ga),u(e,Ca,t),u(e,La,t),f(La,Ba),u(e,Ha,t),u(e,Na,t),f(Na,xa),f(Na,ja),f(ja,Wa),u(e,za,t),u(e,Fa,t),f(Fa,Ra),u(e,Ka,t),u(e,Va,t),f(Va,qa),f(Va,Ma),f(Ma,Ua),f(Va,Ya),u(e,Ja,t),u(e,Qa,t),f(Qa,Xa),f(Qa,_a),f(_a,Za),u(e,$a,t),u(e,eo,t),f(eo,ao),u(e,oo,t),u(e,to,t),f(to,ro),f(to,no),f(no,so),f(to,io),f(to,ho),f(ho,lo),f(to,co)},p:p,i:p,o:p,d(e){e&&d(a),e&&d(m),e&&d(w),e&&d(y),e&&d(v),e&&d(E),e&&d(P),e&&d(D),e&&d(A),e&&d(O),e&&d(I),e&&d(C),e&&d(L),e&&d(H),e&&d(N),e&&d(z),e&&d(F),e&&d(K),e&&d(V),e&&d(M),e&&d(U),e&&d(X),e&&d(_),e&&d(ae),e&&d(oe),e&&d(re),e&&d(ne),e&&d(le),e&&d(ce),e&&d(ge),e&&d(me),e&&d(be),e&&d(ye),e&&d(Ae),e&&d(Se),e&&d(Ie),e&&d(Ge),e&&d(Le),e&&d(Be),e&&d(Ne),e&&d(xe),e&&d(We),e&&d(ze),e&&d(Re),e&&d(Ke),e&&d(qe),e&&d(Me),e&&d(Ye),e&&d(Je),e&&d(Xe),e&&d(_e),e&&d($e),e&&d(ea),e&&d(oa),e&&d(ta),e&&d(na),e&&d(sa),e&&d(ha),e&&d(da),e&&d(ca),e&&d(ua),e&&d(ma),e&&d(wa),e&&d(ya),e&&d(va),e&&d(Da),e&&d(Aa),e&&d(Oa),e&&d(Ia),e&&d(Ca),e&&d(La),e&&d(Ha),e&&d(Na),e&&d(za),e&&d(Fa),e&&d(Ka),e&&d(Va),e&&d(Ja),e&&d(Qa),e&&d($a),e&&d(eo),e&&d(oo),e&&d(to)}}}export default class extends e{constructor(e){super(),a(this,e,null,g,o,{})}}