import{S as e,i as a,s as t,e as o,t as r,a as n,c as i,b as s,d as l,f as h,g as d,h as c,j as u,k as f,n as p}from"./client.f328899a.js";function m(e){let a,t,m,g,w,y,v,b,k,S,T,E,P,I,W,C,G,R,A,z,F,O,U,D,M,B,N,x,H,V,j,J,L,Y,X,K,Q,q,Z,$,_,ee,ae,te,oe,re,ne,ie,se,le,he,de,ce,ue,fe,pe,me,ge,we,ye,ve,be,ke,Se,Te,Ee,Pe,Ie,We,Ce,Ge,Re,Ae,ze,Fe,Oe,Ue,De,Me,Be,Ne,xe,He,Ve,je,Je,Le,Ye,Xe,Ke,Qe,qe,Ze,$e,_e,ea,aa,ta,oa,ra,na,ia,sa,la,ha,da;return{c(){a=o("p"),t=r("5GHz RF Update and the second part of the IEEE Radio and Wireless Week report from Phase 4 Ground."),m=n(),g=o("p"),w=r("Video at "),y=o("a"),v=r("https://youtu.be/gY0IQsppSI4"),b=n(),k=o("p"),S=r("TWIoS Session 1! The theme was Next Generation Concepts for Space and was chaired by Charlie Jackson from Northrup Grumman and Thomas Ussmueller from the University of Innsbruck. If you’ve been hanging out with us for a while then you know we already attended an entire class about commercial airline backhauls, so we skipped this one and had a civilized breakfast instead. This application is entirely commercial and locked down, and follows the design pattern of the subscriber or receiver being the entity that’s very carefully controlled. We’re already doing everything right in this implementation that we can be doing. As you know, in amateur radio, the receiver isn’t the thing we are controlling. It’s the transmitter. Anyone can receive, but we have only licensed transmitters. This reversal of some of the assumptions makes working through and adapting communications protocols so rewarding."),T=n(),E=o("p"),P=r("TWIoS Session 1 talk 2 was a compelling and meaningful application of satellite communications link supporting a vital infrastructure project to a very marginalized and overlooked community in the Himalayans. The remote monitoring is for a small hydroelectric plant. The lessons learned here are very relevant. Maintenance and ease of use, pay as you go, sustainable and durable design, listening to the community and understanding what they really need? This came through loud and clear. The satellite technology in this case was a very small part of the presentation. The point of this talk was to show how satellite communications can provide remote monitoring and internet of things support."),I=n(),W=o("p"),C=r("TWIoS Session 1 talk 3 was very relevant to Phase 4 Space. “Design Challenges of a Highly Integrated SDR Platform for Multi-Band Spacecraft Applications in Radiation Environments”, by J. Budroweit and his team from Brandenburg University of Technology. Guess what they did? They took the AD9361, which is the same RFIC used in the Ettus USRP 300 series, and they zapped the snot out of it with radiation. They also got results for the voltage regulators. Voltage regulators are a hard part. As radiation goes up, voltage goes up, things stop working. So, quote, “At a total ionizing dose of 7.5kRad, the regulator output\nvoltage in these tests increased continuously until the voltage level reaches the maximum specified input voltage of the following powered devices. Other sub-voltage-regulators in the system show a similar ionization effects behavior and has been classified as medium-critical for further development activities."),G=n(),R=o("p"),A=r("Everyone in our circle pretty much knows that the 7000 series Zync processors are going to work out as radiation tolerant devices, but characterizing the RFIC was something on our radar and Brandenburg University delivered. The result? For the RFIC, at a dose of 17.5kRad, the test-setup was modified with shielding-blocks for continuous irradiation only for the RF transceiver part. The AD9361 showed good robustness against this ionizing dose. No degradations were observed. How cool is that? Oh, and then? Then they amped it up to 25kRad and it still didn’t care."),z=n(),F=o("p"),O=r("The goal of this team is to put a highly integrated general SDR platform for multi band RF applications in space, using a state of the art transceiver. In orbit verification is expected on the S2TEP launch in 2019, with testing in 2020. This is a 35kg MicroSat. This is right up our Careful COTS alley on Phase 4 Space. Want to help? Write me and let’s use these results to get a design together!"),U=n(),D=o("p"),M=r("TWIoS Session 2 in the afternoon was Radiation Considerations for Space, chaired by chaired by Thomas Ussmueller from the University of Innsbruck and Charlie Jackson from Northrup Grumman."),B=n(),N=o("p"),x=r("TWIoS Session 2 talk 1 was a circuit design for a radiation tolerant 2.4 GHz Synthesizer Based on COTS Components. Motivation is the move away from large bulky satellites to commercial commodity smaller satellites, like CubeSats, has increased the use of WiFi. Commercial wireless technology in space needs a good synthesizer that is radiation tolerant, and the design discussed here is a more durable synthesizer built up from discrete carefully chosen COTS components."),H=n(),V=o("p"),j=r("There’s a lot of Careful COTS discussed at this conference. If you’re not familiar with that term, it means that you construct your circuit from radiation tolerant commercial off the shelf components that were not specifically designed from space, and then you test your design at the system level, possibly putting in redundancy and other mechanisms to recover from radiation induced events."),J=n(),L=o("p"),Y=r("Careful COTS is in contrast to the much more rigorous and expensive “designed for space from the beginning heavily integrated solution” that we call radiation hardened."),X=n(),K=o("p"),Q=r("This synthesizer isn’t terribly high performance, but it works."),q=n(),Z=o("p"),$=r("TWIoS Session 2 talk 2 was about JICG MOS Transistors for Reduction of Radiation Effects in CMOS. This is manipulating things at silicon level, so not exactly in our ballpark. Yet."),_=n(),ee=o("p"),ae=r("TWIoS Session 2 talk 3 was Reflectionless Filters for miniaturized space applications. This is a class of filters that are very small, therefore possibly of use in CubeSats. Inductors don’t obey Moore’s law, it turns out, so some circuits can be miniaturized much more easily than others."),te=n(),oe=o("p"),re=r("I went to a 3d printed antenna track and a six port structure track and found out a lot of really good information on 122GHz RF. If you’re into any of those things, let me know and we’ll talk more."),ne=n(),ie=o("p"),se=r("So, wow, that was a lot of satellite stuff! We made a lot of contacts and have solid offers of collaboration that I’m going to do my very best to take full advantage of. Check out the UWE-3 papers in the research papers repository at Phase 4 Space, and the AD9361 results. We had a great time at the ham demo and promoted AMSAT and amateur radio and made lots of friends. Well worth doing, and I think we’ll see plenty of results."),le=n(),he=o("p"),de=r("Next year, Radio and Wireless Week will be in Orlando, Florida, so if you are in that area and can help demonstrate amateur radio and amateur satellite, the chair of the event wants you to come! There’s a very large amount of enthusiasm and support for amateur radio at this and other IEEE MTT-S events, so think about it and let’s start planning now!"),ce=n(),ue=o("p"),fe=r("Phase 4 Ground home page "),pe=o("a"),me=r("https://phase4ground.github.io/"),ge=n(),we=o("p"),ye=r("We are Phase 4 Ground and our mission is to implement an open source version of the DVB-S2 and DVB-S2X and Generic Stream Encapsulation (GSE) protocols for amateur radio, for both space and ground. The project includes the radios and a central server, or Groundsat. It’s named Groundsat because it’s a satellite simulator on the ground, providing the same functions a broadband microwave payload would in order to create a network."),ve=n(),be=o("p"),ke=r("All the Digital Video Broadcasting protocols that we are working with can be found for free at "),Se=o("a"),Te=r("https://www.dvb.org/"),Ee=r(" and from links on our homepage."),Pe=n(),Ie=o("p"),We=r("Note that GSE allows any digital data to be transmitted. We are not implementing a system limited to MPEG video."),Ce=n(),Ge=o("p"),Re=r("DVB world conference is coming up! Anyone near Warsaw? That’s where it’s at for 2018."),Ae=n(),ze=o("p"),Fe=r("Our reference design is in GNU Radio and we have some of the blocks done. We need plenty more and upcoming videos will go into detail for each one."),Oe=n(),Ue=o("p"),De=r("Learn all about GNU Radio here: "),Me=o("a"),Be=r("https://www.gnuradio.org/"),Ne=n(),xe=o("p"),He=r("Engineering for Phase 4 Ground is done primarily on our email list and Slack accounts."),Ve=n(),je=o("p"),Je=r("We have a YouTube playlist at "),Le=o("a"),Ye=r("https://www.youtube.com/playlist?list=PLavdGnjBLuiX97DAKk32NJ1bCF1a0cv01"),Xe=r(" that includes our video reports and videos that are of use or interest to Phase 4 Ground. Please subscribe and let us know what you’d like to hear about most."),Ke=n(),Qe=o("p"),qe=r("Phase 4 Space home page "),Ze=o("a"),$e=r("https://phase4space.github.io/"),_e=n(),ea=o("p"),aa=r("Phase 4 Space is an open source public domain project for broadband microwave amateur radio satellites because we want a lot of payloads to talk to! We’ll be using two wonderful open source resources to start. AO-10 blueprints and UPSat, the open source satellite currently operational, from Libre Space Foundation."),ta=n(),oa=o("p"),ra=r("To volunteer directly for either, visit the AMSAT volunteer landing page "),na=o("a"),ia=r("https://www.amsat.org/volunteer-for-amsat/"),sa=r(" or send an email "),la=o("a"),ha=r("w5nyv@arrl.net"),da=r(" to get started!"),this.h()},l(e){a=i(e,"P",{});var o=s(a);t=l(o,"5GHz RF Update and the second part of the IEEE Radio and Wireless Week report from Phase 4 Ground."),o.forEach(h),m=d(e),g=i(e,"P",{});var r=s(g);w=l(r,"Video at "),y=i(r,"A",{href:!0,rel:!0});var n=s(y);v=l(n,"https://youtu.be/gY0IQsppSI4"),n.forEach(h),r.forEach(h),b=d(e),k=i(e,"P",{});var c=s(k);S=l(c,"TWIoS Session 1! The theme was Next Generation Concepts for Space and was chaired by Charlie Jackson from Northrup Grumman and Thomas Ussmueller from the University of Innsbruck. If you’ve been hanging out with us for a while then you know we already attended an entire class about commercial airline backhauls, so we skipped this one and had a civilized breakfast instead. This application is entirely commercial and locked down, and follows the design pattern of the subscriber or receiver being the entity that’s very carefully controlled. We’re already doing everything right in this implementation that we can be doing. As you know, in amateur radio, the receiver isn’t the thing we are controlling. It’s the transmitter. Anyone can receive, but we have only licensed transmitters. This reversal of some of the assumptions makes working through and adapting communications protocols so rewarding."),c.forEach(h),T=d(e),E=i(e,"P",{});var u=s(E);P=l(u,"TWIoS Session 1 talk 2 was a compelling and meaningful application of satellite communications link supporting a vital infrastructure project to a very marginalized and overlooked community in the Himalayans. The remote monitoring is for a small hydroelectric plant. The lessons learned here are very relevant. Maintenance and ease of use, pay as you go, sustainable and durable design, listening to the community and understanding what they really need? This came through loud and clear. The satellite technology in this case was a very small part of the presentation. The point of this talk was to show how satellite communications can provide remote monitoring and internet of things support."),u.forEach(h),I=d(e),W=i(e,"P",{});var f=s(W);C=l(f,"TWIoS Session 1 talk 3 was very relevant to Phase 4 Space. “Design Challenges of a Highly Integrated SDR Platform for Multi-Band Spacecraft Applications in Radiation Environments”, by J. Budroweit and his team from Brandenburg University of Technology. Guess what they did? They took the AD9361, which is the same RFIC used in the Ettus USRP 300 series, and they zapped the snot out of it with radiation. They also got results for the voltage regulators. Voltage regulators are a hard part. As radiation goes up, voltage goes up, things stop working. So, quote, “At a total ionizing dose of 7.5kRad, the regulator output\nvoltage in these tests increased continuously until the voltage level reaches the maximum specified input voltage of the following powered devices. Other sub-voltage-regulators in the system show a similar ionization effects behavior and has been classified as medium-critical for further development activities."),f.forEach(h),G=d(e),R=i(e,"P",{});var p=s(R);A=l(p,"Everyone in our circle pretty much knows that the 7000 series Zync processors are going to work out as radiation tolerant devices, but characterizing the RFIC was something on our radar and Brandenburg University delivered. The result? For the RFIC, at a dose of 17.5kRad, the test-setup was modified with shielding-blocks for continuous irradiation only for the RF transceiver part. The AD9361 showed good robustness against this ionizing dose. No degradations were observed. How cool is that? Oh, and then? Then they amped it up to 25kRad and it still didn’t care."),p.forEach(h),z=d(e),F=i(e,"P",{});var ca=s(F);O=l(ca,"The goal of this team is to put a highly integrated general SDR platform for multi band RF applications in space, using a state of the art transceiver. In orbit verification is expected on the S2TEP launch in 2019, with testing in 2020. This is a 35kg MicroSat. This is right up our Careful COTS alley on Phase 4 Space. Want to help? Write me and let’s use these results to get a design together!"),ca.forEach(h),U=d(e),D=i(e,"P",{});var ua=s(D);M=l(ua,"TWIoS Session 2 in the afternoon was Radiation Considerations for Space, chaired by chaired by Thomas Ussmueller from the University of Innsbruck and Charlie Jackson from Northrup Grumman."),ua.forEach(h),B=d(e),N=i(e,"P",{});var fa=s(N);x=l(fa,"TWIoS Session 2 talk 1 was a circuit design for a radiation tolerant 2.4 GHz Synthesizer Based on COTS Components. Motivation is the move away from large bulky satellites to commercial commodity smaller satellites, like CubeSats, has increased the use of WiFi. Commercial wireless technology in space needs a good synthesizer that is radiation tolerant, and the design discussed here is a more durable synthesizer built up from discrete carefully chosen COTS components."),fa.forEach(h),H=d(e),V=i(e,"P",{});var pa=s(V);j=l(pa,"There’s a lot of Careful COTS discussed at this conference. If you’re not familiar with that term, it means that you construct your circuit from radiation tolerant commercial off the shelf components that were not specifically designed from space, and then you test your design at the system level, possibly putting in redundancy and other mechanisms to recover from radiation induced events."),pa.forEach(h),J=d(e),L=i(e,"P",{});var ma=s(L);Y=l(ma,"Careful COTS is in contrast to the much more rigorous and expensive “designed for space from the beginning heavily integrated solution” that we call radiation hardened."),ma.forEach(h),X=d(e),K=i(e,"P",{});var ga=s(K);Q=l(ga,"This synthesizer isn’t terribly high performance, but it works."),ga.forEach(h),q=d(e),Z=i(e,"P",{});var wa=s(Z);$=l(wa,"TWIoS Session 2 talk 2 was about JICG MOS Transistors for Reduction of Radiation Effects in CMOS. This is manipulating things at silicon level, so not exactly in our ballpark. Yet."),wa.forEach(h),_=d(e),ee=i(e,"P",{});var ya=s(ee);ae=l(ya,"TWIoS Session 2 talk 3 was Reflectionless Filters for miniaturized space applications. This is a class of filters that are very small, therefore possibly of use in CubeSats. Inductors don’t obey Moore’s law, it turns out, so some circuits can be miniaturized much more easily than others."),ya.forEach(h),te=d(e),oe=i(e,"P",{});var va=s(oe);re=l(va,"I went to a 3d printed antenna track and a six port structure track and found out a lot of really good information on 122GHz RF. If you’re into any of those things, let me know and we’ll talk more."),va.forEach(h),ne=d(e),ie=i(e,"P",{});var ba=s(ie);se=l(ba,"So, wow, that was a lot of satellite stuff! We made a lot of contacts and have solid offers of collaboration that I’m going to do my very best to take full advantage of. Check out the UWE-3 papers in the research papers repository at Phase 4 Space, and the AD9361 results. We had a great time at the ham demo and promoted AMSAT and amateur radio and made lots of friends. Well worth doing, and I think we’ll see plenty of results."),ba.forEach(h),le=d(e),he=i(e,"P",{});var ka=s(he);de=l(ka,"Next year, Radio and Wireless Week will be in Orlando, Florida, so if you are in that area and can help demonstrate amateur radio and amateur satellite, the chair of the event wants you to come! There’s a very large amount of enthusiasm and support for amateur radio at this and other IEEE MTT-S events, so think about it and let’s start planning now!"),ka.forEach(h),ce=d(e),ue=i(e,"P",{});var Sa=s(ue);fe=l(Sa,"Phase 4 Ground home page "),pe=i(Sa,"A",{href:!0,rel:!0});var Ta=s(pe);me=l(Ta,"https://phase4ground.github.io/"),Ta.forEach(h),Sa.forEach(h),ge=d(e),we=i(e,"P",{});var Ea=s(we);ye=l(Ea,"We are Phase 4 Ground and our mission is to implement an open source version of the DVB-S2 and DVB-S2X and Generic Stream Encapsulation (GSE) protocols for amateur radio, for both space and ground. The project includes the radios and a central server, or Groundsat. It’s named Groundsat because it’s a satellite simulator on the ground, providing the same functions a broadband microwave payload would in order to create a network."),Ea.forEach(h),ve=d(e),be=i(e,"P",{});var Pa=s(be);ke=l(Pa,"All the Digital Video Broadcasting protocols that we are working with can be found for free at "),Se=i(Pa,"A",{href:!0,rel:!0});var Ia=s(Se);Te=l(Ia,"https://www.dvb.org/"),Ia.forEach(h),Ee=l(Pa," and from links on our homepage."),Pa.forEach(h),Pe=d(e),Ie=i(e,"P",{});var Wa=s(Ie);We=l(Wa,"Note that GSE allows any digital data to be transmitted. We are not implementing a system limited to MPEG video."),Wa.forEach(h),Ce=d(e),Ge=i(e,"P",{});var Ca=s(Ge);Re=l(Ca,"DVB world conference is coming up! Anyone near Warsaw? That’s where it’s at for 2018."),Ca.forEach(h),Ae=d(e),ze=i(e,"P",{});var Ga=s(ze);Fe=l(Ga,"Our reference design is in GNU Radio and we have some of the blocks done. We need plenty more and upcoming videos will go into detail for each one."),Ga.forEach(h),Oe=d(e),Ue=i(e,"P",{});var Ra=s(Ue);De=l(Ra,"Learn all about GNU Radio here: "),Me=i(Ra,"A",{href:!0,rel:!0});var Aa=s(Me);Be=l(Aa,"https://www.gnuradio.org/"),Aa.forEach(h),Ra.forEach(h),Ne=d(e),xe=i(e,"P",{});var za=s(xe);He=l(za,"Engineering for Phase 4 Ground is done primarily on our email list and Slack accounts."),za.forEach(h),Ve=d(e),je=i(e,"P",{});var Fa=s(je);Je=l(Fa,"We have a YouTube playlist at "),Le=i(Fa,"A",{href:!0,rel:!0});var Oa=s(Le);Ye=l(Oa,"https://www.youtube.com/playlist?list=PLavdGnjBLuiX97DAKk32NJ1bCF1a0cv01"),Oa.forEach(h),Xe=l(Fa," that includes our video reports and videos that are of use or interest to Phase 4 Ground. Please subscribe and let us know what you’d like to hear about most."),Fa.forEach(h),Ke=d(e),Qe=i(e,"P",{});var Ua=s(Qe);qe=l(Ua,"Phase 4 Space home page "),Ze=i(Ua,"A",{href:!0,rel:!0});var Da=s(Ze);$e=l(Da,"https://phase4space.github.io/"),Da.forEach(h),Ua.forEach(h),_e=d(e),ea=i(e,"P",{});var Ma=s(ea);aa=l(Ma,"Phase 4 Space is an open source public domain project for broadband microwave amateur radio satellites because we want a lot of payloads to talk to! We’ll be using two wonderful open source resources to start. AO-10 blueprints and UPSat, the open source satellite currently operational, from Libre Space Foundation."),Ma.forEach(h),ta=d(e),oa=i(e,"P",{});var Ba=s(oa);ra=l(Ba,"To volunteer directly for either, visit the AMSAT volunteer landing page "),na=i(Ba,"A",{href:!0,rel:!0});var Na=s(na);ia=l(Na,"https://www.amsat.org/volunteer-for-amsat/"),Na.forEach(h),sa=l(Ba," or send an email "),la=i(Ba,"A",{href:!0});var xa=s(la);ha=l(xa,"w5nyv@arrl.net"),xa.forEach(h),da=l(Ba," to get started!"),Ba.forEach(h),this.h()},h(){c(y,"href","https://youtu.be/gY0IQsppSI4"),c(y,"rel","nofollow"),c(pe,"href","https://phase4ground.github.io/"),c(pe,"rel","nofollow"),c(Se,"href","https://www.dvb.org/"),c(Se,"rel","nofollow"),c(Me,"href","https://www.gnuradio.org/"),c(Me,"rel","nofollow"),c(Le,"href","https://www.youtube.com/playlist?list=PLavdGnjBLuiX97DAKk32NJ1bCF1a0cv01"),c(Le,"rel","nofollow"),c(Ze,"href","https://phase4space.github.io/"),c(Ze,"rel","nofollow"),c(na,"href","https://www.amsat.org/volunteer-for-amsat/"),c(na,"rel","nofollow"),c(la,"href","mailto:w5nyv@arrl.net")},m(e,o){u(e,a,o),f(a,t),u(e,m,o),u(e,g,o),f(g,w),f(g,y),f(y,v),u(e,b,o),u(e,k,o),f(k,S),u(e,T,o),u(e,E,o),f(E,P),u(e,I,o),u(e,W,o),f(W,C),u(e,G,o),u(e,R,o),f(R,A),u(e,z,o),u(e,F,o),f(F,O),u(e,U,o),u(e,D,o),f(D,M),u(e,B,o),u(e,N,o),f(N,x),u(e,H,o),u(e,V,o),f(V,j),u(e,J,o),u(e,L,o),f(L,Y),u(e,X,o),u(e,K,o),f(K,Q),u(e,q,o),u(e,Z,o),f(Z,$),u(e,_,o),u(e,ee,o),f(ee,ae),u(e,te,o),u(e,oe,o),f(oe,re),u(e,ne,o),u(e,ie,o),f(ie,se),u(e,le,o),u(e,he,o),f(he,de),u(e,ce,o),u(e,ue,o),f(ue,fe),f(ue,pe),f(pe,me),u(e,ge,o),u(e,we,o),f(we,ye),u(e,ve,o),u(e,be,o),f(be,ke),f(be,Se),f(Se,Te),f(be,Ee),u(e,Pe,o),u(e,Ie,o),f(Ie,We),u(e,Ce,o),u(e,Ge,o),f(Ge,Re),u(e,Ae,o),u(e,ze,o),f(ze,Fe),u(e,Oe,o),u(e,Ue,o),f(Ue,De),f(Ue,Me),f(Me,Be),u(e,Ne,o),u(e,xe,o),f(xe,He),u(e,Ve,o),u(e,je,o),f(je,Je),f(je,Le),f(Le,Ye),f(je,Xe),u(e,Ke,o),u(e,Qe,o),f(Qe,qe),f(Qe,Ze),f(Ze,$e),u(e,_e,o),u(e,ea,o),f(ea,aa),u(e,ta,o),u(e,oa,o),f(oa,ra),f(oa,na),f(na,ia),f(oa,sa),f(oa,la),f(la,ha),f(oa,da)},p:p,i:p,o:p,d(e){e&&h(a),e&&h(m),e&&h(g),e&&h(b),e&&h(k),e&&h(T),e&&h(E),e&&h(I),e&&h(W),e&&h(G),e&&h(R),e&&h(z),e&&h(F),e&&h(U),e&&h(D),e&&h(B),e&&h(N),e&&h(H),e&&h(V),e&&h(J),e&&h(L),e&&h(X),e&&h(K),e&&h(q),e&&h(Z),e&&h(_),e&&h(ee),e&&h(te),e&&h(oe),e&&h(ne),e&&h(ie),e&&h(le),e&&h(he),e&&h(ce),e&&h(ue),e&&h(ge),e&&h(we),e&&h(ve),e&&h(be),e&&h(Pe),e&&h(Ie),e&&h(Ce),e&&h(Ge),e&&h(Ae),e&&h(ze),e&&h(Oe),e&&h(Ue),e&&h(Ne),e&&h(xe),e&&h(Ve),e&&h(je),e&&h(Ke),e&&h(Qe),e&&h(_e),e&&h(ea),e&&h(ta),e&&h(oa)}}}export default class extends e{constructor(e){super(),a(this,e,null,m,t,{})}}