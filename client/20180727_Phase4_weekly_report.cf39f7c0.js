import{S as e,i as t,s as a,e as o,t as r,a as n,c as i,b as s,d as h,f as d,g as l,h as c,j as u,k as p,n as f}from"./client.f328899a.js";function g(e){let t,a,g,m,v,b,w,y,P,k,S,E,T,R,U,A,D,W,C,G,I,x,O,N,H,L,B,F,M,j,J,V,q,K,z,X,Y,Q,Z,$,_,ee,te,ae,oe,re,ne,ie,se,he,de,le,ce,ue,pe,fe,ge,me,ve,be,we,ye,Pe,ke,Se,Ee,Te,Re,Ue,Ae,De,We,Ce,Ge,Ie,xe,Oe,Ne,He,Le,Be,Fe,Me,je,Je,Ve,qe,Ke,ze,Xe,Ye,Qe,Ze,$e,_e,et,tt,at,ot,rt,nt,it,st,ht,dt,lt,ct,ut,pt,ft,gt,mt,vt,bt,wt,yt,Pt,kt,St,Et,Tt,Rt,Ut,At,Dt,Wt,Ct,Gt,It,xt,Ot,Nt,Ht,Lt,Bt,Ft,Mt,jt,Jt,Vt,qt,Kt,zt,Xt,Yt,Qt,Zt,$t,_t,ea,ta,aa,oa,ra;return{c(){t=o("p"),a=r("Welcome to the engineering report for Phase 4 Ground!\n27 July 2018"),g=n(),m=o("p"),v=r("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"),b=n(),w=o("p"),y=r("Ubuntu Snaps for SDR"),P=n(),k=o("p"),S=r("Snaps are containerized software packages for Ubuntu. They are designed to be simple to create, install, run, and update on all major Linux systems without modification."),E=n(),T=o("p"),R=r("Steve Conklin, our platform lead, believes that Ubuntu Snaps are a great solution for some of our SDR work. He will be looking to work with Phil Karn’s SDR package. What needs to happen next is getting the Karn SDR package updated with any recent work, and getting it to reliably build. If you can help with this, then contact Steve Conklin ("),U=o("a"),A=r("steve@conklinhouse.com"),D=r(") and proceed."),W=n(),C=o("p"),G=r("The current SDR code is here: "),I=o("a"),x=r("https://github.com/phase4ground/ka9q-sdr"),O=n(),N=o("p"),H=r("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"),L=n(),B=o("p"),F=r("IP Multicast Engineering Adventures"),M=n(),j=o("p"),J=r("Phil Karn found what he thought were two annoying Linux kernel bugs last week."),V=n(),q=o("p"),K=r("The first was indeed an ipv4 multicast routing bug. The second was in the ALSA sound driver, and turned out to be a hardware-specific driver setting problem."),z=n(),X=o("p"),Y=r("First, the ipv4 bug. An arbitrary hard-coded limit of 10 pending entries in the multicast routing table caused multicast traffic to never start on a network with lots of multicast traffic (e.g., at University of California at San Diego UCSD) when the stream you want had low activity."),Q=n(),Z=o("p"),$=r("Phil could usually (but not always) get audio to flow when the receiver was tuned to NOAA Weather Radio (continuous), but often not when tuned to APRS (intermittent). And he could never get decoded AX.25 frames (every 5-10 sec or so)."),_=n(),ee=o("p"),te=r("These things worked well in other networks, but not at UCSD."),ae=n(),oe=o("p"),re=r("Phil filed a bug report with the Linux kernel developers who confirmed it was a problem and proposed a patch. Phil reported that it only took a few hours to get a response."),ne=n(),ie=o("p"),se=r("Open source for the win!"),he=n(),de=o("p"),le=r("Of course, as Phil notes, open source only works when enough people use a functionality or protocol to create enough test cases that cover enough of the potential search space to where you will get the weird results that turn out to be subtle bugs."),ce=n(),ue=o("p"),pe=r("When Phil dug into the sound driver bug, it turned out to be a glitch in the Intel HDA timing system in his particular Dell laptop. There’s a lot of this glitchery in this particular chip, and there are pages and pages of notes on various driver options to set to work around it. He found a discussion of what sounded like his problem, tried the suggested options on the kernel module, and the problem cleared up."),fe=n(),ge=o("p"),me=r("The problem was that with the default settings, an interrupt didn’t get registered in the Linux kernel. He doesn’t understand why it worked at all, but it’s working now, and seems limited to particular laptop hardware. The symptom was that callbacks from the portaudio library stop coming, and the thread that calls them is stuck in a poll() that never returned."),ve=n(),be=o("p"),we=r("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"),ye=n(),Pe=o("p"),ke=r("Multicore Programming Notes"),Se=n(),Ee=o("p"),Te=r("Threading is powerful but also full of pitfalls. Phil relies heavily on pthreads. With even embedded processors often having two to four cores, anything worth coding really needs to take multiple cores into account and use them as effectively as possible. However, not only do you have to be concerned about race conditions, but also memory fencing, store fending, and load fencing."),Re=n(),Ue=o("p"),Ae=r("Race conditions are somewhat self-explanatory. One set of instructions starts before input data is available or calculated in time. That means stale or missing data is used instead of expected timely results. Race conditions can be managed in several ways, including the use of flags or semaphores or guaranteed delays."),De=n(),We=o("p"),Ce=r("Memory fencing is when you ensure that memory operations occur in the correct order. If you have a single linear set of operations, this is inherent in the code. If you have concurrent lines of code, then enforcing proper shared memory access (both loads and stores) becomes critical."),Ge=n(),Ie=o("p"),xe=r("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"),Oe=n(),Ne=o("p"),He=r("PlusUltra!"),Le=n(),Be=o("p"),Fe=r("Ultra96 work is proceeding. This effort is focused on getting Charles Brain’s LDPC decode into an FPGA (among other functions). The Ultra96 is the leading contender for a development platform."),Me=n(),je=o("p"),Je=r("We’ve build bootable SD cards for the Ultra96 in a variety of ways. Methods include the PetaLinux toolchain as well as utilities from Brennan Ashton ("),Ve=o("a"),qe=r("https://gitlab.com/btashton/ultra96-notes/tree/master"),Ke=r(")."),ze=n(),Xe=o("p"),Ye=r("Jan Schiefer has updated his instructions on building an SD card that includes GNU Radio for the Ultra96: "),Qe=o("a"),Ze=r("https://github.com/phase4ground/PlusUltra"),$e=n(),_e=o("p"),et=r("This rewires the console port to come out of the console connector, adds drivers for some popular Realtek-based USB Ethernet dongles (so you can use Ethernet, or even TFTP-boot!), and adds gnuradio (version 3.7.13.4), including UHD."),tt=n(),at=o("p"),ot=r("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"),rt=n(),nt=o("p"),it=r("Trans-Ionospheric Badge"),st=n(),ht=o("p"),dt=r("100 production badges arrived today (Friday 27 July) and another 100 will arrive next week. These hackable conference badges are amateur radio themed and are planned to interact with Phase 4 Ground radios as a wearable extension of the user interface."),lt=n(),ct=o("p"),ut=r("Proceeds directly benefit Phase 4 Ground radio development board efforts. Our major sales event for Trans-Ionospheric badges will be at DEFCON, which is coming right up."),pt=n(),ft=o("p"),gt=r("The good news here is that we have a cooperative vendor in the DEFCON vendor room that has agreed to sell the boards at his booth. We are greatly appreciative of this opportunity. It’s a huge help to funding Phase 4 Ground and spreading the fun of #badgelife."),mt=n(),vt=o("p"),bt=r("Phase 4 Ground, Open Research Institute, and Ettus Research will be part of WiFi Village this year. Come visit us and have fun with SDRs and GNU Radio!"),wt=n(),yt=o("p"),Pt=r("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"),kt=n(),St=o("p"),Et=r("Linux in the Ham Shack"),Tt=n(),Rt=o("p"),Ut=r("Tune in to the Linux in the Ham Shack podcast episode 238 to hear Michelle W5NYV and Steve Conklin interviewed about Phase 4 Ground, Ubuntu Hams, Open Research Institute, and a few other things. Thank you to everyone at Linux in the Ham Shack for the opportunity to spread the news about open source efforts in amateur radio! "),At=o("a"),Dt=r("http://lhspodcast.info/"),Wt=n(),Ct=o("p"),Gt=r("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"),It=n(),xt=o("p"),Ot=r("Block Party at GNU Radio Conference"),Nt=n(),Ht=o("p"),Lt=r("The hardest part of Phase 4 Ground radios is on the receiver side. Having complete DVB-S2 and DVB-S2X receiver blocks in GNU Radio, preferably leveraging RFNoC, is a major (and ambitious) goal. We are making progress, but we have a lot to do. We have organized a summit at GNU Radio Conference in September 2018. It’s called a Block Party, because we want to make some blocks, and because we want it to be fun."),Bt=n(),Ft=o("p"),Mt=r("We will have a dedicated room for the week and volunteers ready to help advise. We are bringing as much lab equipment as we can, a white board, and plenty of enthusiasm. The goal is to produce blocks (or substantial progress on blocks) for GNU Radio. We’ll have some swag and quite possibly some Trans-Ionospheric badges and other items available."),jt=n(),Jt=o("p"),Vt=r("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"),qt=n(),Kt=o("p"),zt=r("Space Policy Participation"),Xt=n(),Yt=o("p"),Qt=r("Open Research Institute will be at Goddard Space Center to participate in the Interplanetary CubeSat Workshop in August. We’ll also be at the Open Source CubeSat Workshop in Madrid, Spain in September."),Zt=n(),$t=o("p"),_t=r("The goal of participating and presenting at events such as these is to advance open source hardware and software in the amateur radio satellite service. There is a lot of work to be done here and we have a lot to learn. Our views are distinct from, add to, and interact with, those of AMSAT, ARRL, and others. We advocate a strong, committed open source approach and are actively developing and refining our policy views in order to make open source work easy and accessible and effective for anyone wanting to contribute to the amateur radio satellite service."),ea=n(),ta=o("p"),aa=r("Join our mailing list and find out more about Phase 4 Ground and other Open Research Institute projects at "),oa=o("a"),ra=r("https://openresearch.institute/"),this.h()},l(e){t=i(e,"P",{});var o=s(t);a=h(o,"Welcome to the engineering report for Phase 4 Ground!\n27 July 2018"),o.forEach(d),g=l(e),m=i(e,"P",{});var r=s(m);v=h(r,"-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"),r.forEach(d),b=l(e),w=i(e,"P",{});var n=s(w);y=h(n,"Ubuntu Snaps for SDR"),n.forEach(d),P=l(e),k=i(e,"P",{});var c=s(k);S=h(c,"Snaps are containerized software packages for Ubuntu. They are designed to be simple to create, install, run, and update on all major Linux systems without modification."),c.forEach(d),E=l(e),T=i(e,"P",{});var u=s(T);R=h(u,"Steve Conklin, our platform lead, believes that Ubuntu Snaps are a great solution for some of our SDR work. He will be looking to work with Phil Karn’s SDR package. What needs to happen next is getting the Karn SDR package updated with any recent work, and getting it to reliably build. If you can help with this, then contact Steve Conklin ("),U=i(u,"A",{href:!0});var p=s(U);A=h(p,"steve@conklinhouse.com"),p.forEach(d),D=h(u,") and proceed."),u.forEach(d),W=l(e),C=i(e,"P",{});var f=s(C);G=h(f,"The current SDR code is here: "),I=i(f,"A",{href:!0,rel:!0});var na=s(I);x=h(na,"https://github.com/phase4ground/ka9q-sdr"),na.forEach(d),f.forEach(d),O=l(e),N=i(e,"P",{});var ia=s(N);H=h(ia,"-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"),ia.forEach(d),L=l(e),B=i(e,"P",{});var sa=s(B);F=h(sa,"IP Multicast Engineering Adventures"),sa.forEach(d),M=l(e),j=i(e,"P",{});var ha=s(j);J=h(ha,"Phil Karn found what he thought were two annoying Linux kernel bugs last week."),ha.forEach(d),V=l(e),q=i(e,"P",{});var da=s(q);K=h(da,"The first was indeed an ipv4 multicast routing bug. The second was in the ALSA sound driver, and turned out to be a hardware-specific driver setting problem."),da.forEach(d),z=l(e),X=i(e,"P",{});var la=s(X);Y=h(la,"First, the ipv4 bug. An arbitrary hard-coded limit of 10 pending entries in the multicast routing table caused multicast traffic to never start on a network with lots of multicast traffic (e.g., at University of California at San Diego UCSD) when the stream you want had low activity."),la.forEach(d),Q=l(e),Z=i(e,"P",{});var ca=s(Z);$=h(ca,"Phil could usually (but not always) get audio to flow when the receiver was tuned to NOAA Weather Radio (continuous), but often not when tuned to APRS (intermittent). And he could never get decoded AX.25 frames (every 5-10 sec or so)."),ca.forEach(d),_=l(e),ee=i(e,"P",{});var ua=s(ee);te=h(ua,"These things worked well in other networks, but not at UCSD."),ua.forEach(d),ae=l(e),oe=i(e,"P",{});var pa=s(oe);re=h(pa,"Phil filed a bug report with the Linux kernel developers who confirmed it was a problem and proposed a patch. Phil reported that it only took a few hours to get a response."),pa.forEach(d),ne=l(e),ie=i(e,"P",{});var fa=s(ie);se=h(fa,"Open source for the win!"),fa.forEach(d),he=l(e),de=i(e,"P",{});var ga=s(de);le=h(ga,"Of course, as Phil notes, open source only works when enough people use a functionality or protocol to create enough test cases that cover enough of the potential search space to where you will get the weird results that turn out to be subtle bugs."),ga.forEach(d),ce=l(e),ue=i(e,"P",{});var ma=s(ue);pe=h(ma,"When Phil dug into the sound driver bug, it turned out to be a glitch in the Intel HDA timing system in his particular Dell laptop. There’s a lot of this glitchery in this particular chip, and there are pages and pages of notes on various driver options to set to work around it. He found a discussion of what sounded like his problem, tried the suggested options on the kernel module, and the problem cleared up."),ma.forEach(d),fe=l(e),ge=i(e,"P",{});var va=s(ge);me=h(va,"The problem was that with the default settings, an interrupt didn’t get registered in the Linux kernel. He doesn’t understand why it worked at all, but it’s working now, and seems limited to particular laptop hardware. The symptom was that callbacks from the portaudio library stop coming, and the thread that calls them is stuck in a poll() that never returned."),va.forEach(d),ve=l(e),be=i(e,"P",{});var ba=s(be);we=h(ba,"-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"),ba.forEach(d),ye=l(e),Pe=i(e,"P",{});var wa=s(Pe);ke=h(wa,"Multicore Programming Notes"),wa.forEach(d),Se=l(e),Ee=i(e,"P",{});var ya=s(Ee);Te=h(ya,"Threading is powerful but also full of pitfalls. Phil relies heavily on pthreads. With even embedded processors often having two to four cores, anything worth coding really needs to take multiple cores into account and use them as effectively as possible. However, not only do you have to be concerned about race conditions, but also memory fencing, store fending, and load fencing."),ya.forEach(d),Re=l(e),Ue=i(e,"P",{});var Pa=s(Ue);Ae=h(Pa,"Race conditions are somewhat self-explanatory. One set of instructions starts before input data is available or calculated in time. That means stale or missing data is used instead of expected timely results. Race conditions can be managed in several ways, including the use of flags or semaphores or guaranteed delays."),Pa.forEach(d),De=l(e),We=i(e,"P",{});var ka=s(We);Ce=h(ka,"Memory fencing is when you ensure that memory operations occur in the correct order. If you have a single linear set of operations, this is inherent in the code. If you have concurrent lines of code, then enforcing proper shared memory access (both loads and stores) becomes critical."),ka.forEach(d),Ge=l(e),Ie=i(e,"P",{});var Sa=s(Ie);xe=h(Sa,"-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"),Sa.forEach(d),Oe=l(e),Ne=i(e,"P",{});var Ea=s(Ne);He=h(Ea,"PlusUltra!"),Ea.forEach(d),Le=l(e),Be=i(e,"P",{});var Ta=s(Be);Fe=h(Ta,"Ultra96 work is proceeding. This effort is focused on getting Charles Brain’s LDPC decode into an FPGA (among other functions). The Ultra96 is the leading contender for a development platform."),Ta.forEach(d),Me=l(e),je=i(e,"P",{});var Ra=s(je);Je=h(Ra,"We’ve build bootable SD cards for the Ultra96 in a variety of ways. Methods include the PetaLinux toolchain as well as utilities from Brennan Ashton ("),Ve=i(Ra,"A",{href:!0,rel:!0});var Ua=s(Ve);qe=h(Ua,"https://gitlab.com/btashton/ultra96-notes/tree/master"),Ua.forEach(d),Ke=h(Ra,")."),Ra.forEach(d),ze=l(e),Xe=i(e,"P",{});var Aa=s(Xe);Ye=h(Aa,"Jan Schiefer has updated his instructions on building an SD card that includes GNU Radio for the Ultra96: "),Qe=i(Aa,"A",{href:!0,rel:!0});var Da=s(Qe);Ze=h(Da,"https://github.com/phase4ground/PlusUltra"),Da.forEach(d),Aa.forEach(d),$e=l(e),_e=i(e,"P",{});var Wa=s(_e);et=h(Wa,"This rewires the console port to come out of the console connector, adds drivers for some popular Realtek-based USB Ethernet dongles (so you can use Ethernet, or even TFTP-boot!), and adds gnuradio (version 3.7.13.4), including UHD."),Wa.forEach(d),tt=l(e),at=i(e,"P",{});var Ca=s(at);ot=h(Ca,"-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"),Ca.forEach(d),rt=l(e),nt=i(e,"P",{});var Ga=s(nt);it=h(Ga,"Trans-Ionospheric Badge"),Ga.forEach(d),st=l(e),ht=i(e,"P",{});var Ia=s(ht);dt=h(Ia,"100 production badges arrived today (Friday 27 July) and another 100 will arrive next week. These hackable conference badges are amateur radio themed and are planned to interact with Phase 4 Ground radios as a wearable extension of the user interface."),Ia.forEach(d),lt=l(e),ct=i(e,"P",{});var xa=s(ct);ut=h(xa,"Proceeds directly benefit Phase 4 Ground radio development board efforts. Our major sales event for Trans-Ionospheric badges will be at DEFCON, which is coming right up."),xa.forEach(d),pt=l(e),ft=i(e,"P",{});var Oa=s(ft);gt=h(Oa,"The good news here is that we have a cooperative vendor in the DEFCON vendor room that has agreed to sell the boards at his booth. We are greatly appreciative of this opportunity. It’s a huge help to funding Phase 4 Ground and spreading the fun of #badgelife."),Oa.forEach(d),mt=l(e),vt=i(e,"P",{});var Na=s(vt);bt=h(Na,"Phase 4 Ground, Open Research Institute, and Ettus Research will be part of WiFi Village this year. Come visit us and have fun with SDRs and GNU Radio!"),Na.forEach(d),wt=l(e),yt=i(e,"P",{});var Ha=s(yt);Pt=h(Ha,"-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"),Ha.forEach(d),kt=l(e),St=i(e,"P",{});var La=s(St);Et=h(La,"Linux in the Ham Shack"),La.forEach(d),Tt=l(e),Rt=i(e,"P",{});var Ba=s(Rt);Ut=h(Ba,"Tune in to the Linux in the Ham Shack podcast episode 238 to hear Michelle W5NYV and Steve Conklin interviewed about Phase 4 Ground, Ubuntu Hams, Open Research Institute, and a few other things. Thank you to everyone at Linux in the Ham Shack for the opportunity to spread the news about open source efforts in amateur radio! "),At=i(Ba,"A",{href:!0,rel:!0});var Fa=s(At);Dt=h(Fa,"http://lhspodcast.info/"),Fa.forEach(d),Ba.forEach(d),Wt=l(e),Ct=i(e,"P",{});var Ma=s(Ct);Gt=h(Ma,"-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"),Ma.forEach(d),It=l(e),xt=i(e,"P",{});var ja=s(xt);Ot=h(ja,"Block Party at GNU Radio Conference"),ja.forEach(d),Nt=l(e),Ht=i(e,"P",{});var Ja=s(Ht);Lt=h(Ja,"The hardest part of Phase 4 Ground radios is on the receiver side. Having complete DVB-S2 and DVB-S2X receiver blocks in GNU Radio, preferably leveraging RFNoC, is a major (and ambitious) goal. We are making progress, but we have a lot to do. We have organized a summit at GNU Radio Conference in September 2018. It’s called a Block Party, because we want to make some blocks, and because we want it to be fun."),Ja.forEach(d),Bt=l(e),Ft=i(e,"P",{});var Va=s(Ft);Mt=h(Va,"We will have a dedicated room for the week and volunteers ready to help advise. We are bringing as much lab equipment as we can, a white board, and plenty of enthusiasm. The goal is to produce blocks (or substantial progress on blocks) for GNU Radio. We’ll have some swag and quite possibly some Trans-Ionospheric badges and other items available."),Va.forEach(d),jt=l(e),Jt=i(e,"P",{});var qa=s(Jt);Vt=h(qa,"-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"),qa.forEach(d),qt=l(e),Kt=i(e,"P",{});var Ka=s(Kt);zt=h(Ka,"Space Policy Participation"),Ka.forEach(d),Xt=l(e),Yt=i(e,"P",{});var za=s(Yt);Qt=h(za,"Open Research Institute will be at Goddard Space Center to participate in the Interplanetary CubeSat Workshop in August. We’ll also be at the Open Source CubeSat Workshop in Madrid, Spain in September."),za.forEach(d),Zt=l(e),$t=i(e,"P",{});var Xa=s($t);_t=h(Xa,"The goal of participating and presenting at events such as these is to advance open source hardware and software in the amateur radio satellite service. There is a lot of work to be done here and we have a lot to learn. Our views are distinct from, add to, and interact with, those of AMSAT, ARRL, and others. We advocate a strong, committed open source approach and are actively developing and refining our policy views in order to make open source work easy and accessible and effective for anyone wanting to contribute to the amateur radio satellite service."),Xa.forEach(d),ea=l(e),ta=i(e,"P",{});var Ya=s(ta);aa=h(Ya,"Join our mailing list and find out more about Phase 4 Ground and other Open Research Institute projects at "),oa=i(Ya,"A",{href:!0,rel:!0});var Qa=s(oa);ra=h(Qa,"https://openresearch.institute/"),Qa.forEach(d),Ya.forEach(d),this.h()},h(){c(U,"href","mailto:steve@conklinhouse.com"),c(I,"href","https://github.com/phase4ground/ka9q-sdr"),c(I,"rel","nofollow"),c(Ve,"href","https://gitlab.com/btashton/ultra96-notes/tree/master"),c(Ve,"rel","nofollow"),c(Qe,"href","https://github.com/phase4ground/PlusUltra"),c(Qe,"rel","nofollow"),c(At,"href","http://lhspodcast.info/"),c(At,"rel","nofollow"),c(oa,"href","https://openresearch.institute/"),c(oa,"rel","nofollow")},m(e,o){u(e,t,o),p(t,a),u(e,g,o),u(e,m,o),p(m,v),u(e,b,o),u(e,w,o),p(w,y),u(e,P,o),u(e,k,o),p(k,S),u(e,E,o),u(e,T,o),p(T,R),p(T,U),p(U,A),p(T,D),u(e,W,o),u(e,C,o),p(C,G),p(C,I),p(I,x),u(e,O,o),u(e,N,o),p(N,H),u(e,L,o),u(e,B,o),p(B,F),u(e,M,o),u(e,j,o),p(j,J),u(e,V,o),u(e,q,o),p(q,K),u(e,z,o),u(e,X,o),p(X,Y),u(e,Q,o),u(e,Z,o),p(Z,$),u(e,_,o),u(e,ee,o),p(ee,te),u(e,ae,o),u(e,oe,o),p(oe,re),u(e,ne,o),u(e,ie,o),p(ie,se),u(e,he,o),u(e,de,o),p(de,le),u(e,ce,o),u(e,ue,o),p(ue,pe),u(e,fe,o),u(e,ge,o),p(ge,me),u(e,ve,o),u(e,be,o),p(be,we),u(e,ye,o),u(e,Pe,o),p(Pe,ke),u(e,Se,o),u(e,Ee,o),p(Ee,Te),u(e,Re,o),u(e,Ue,o),p(Ue,Ae),u(e,De,o),u(e,We,o),p(We,Ce),u(e,Ge,o),u(e,Ie,o),p(Ie,xe),u(e,Oe,o),u(e,Ne,o),p(Ne,He),u(e,Le,o),u(e,Be,o),p(Be,Fe),u(e,Me,o),u(e,je,o),p(je,Je),p(je,Ve),p(Ve,qe),p(je,Ke),u(e,ze,o),u(e,Xe,o),p(Xe,Ye),p(Xe,Qe),p(Qe,Ze),u(e,$e,o),u(e,_e,o),p(_e,et),u(e,tt,o),u(e,at,o),p(at,ot),u(e,rt,o),u(e,nt,o),p(nt,it),u(e,st,o),u(e,ht,o),p(ht,dt),u(e,lt,o),u(e,ct,o),p(ct,ut),u(e,pt,o),u(e,ft,o),p(ft,gt),u(e,mt,o),u(e,vt,o),p(vt,bt),u(e,wt,o),u(e,yt,o),p(yt,Pt),u(e,kt,o),u(e,St,o),p(St,Et),u(e,Tt,o),u(e,Rt,o),p(Rt,Ut),p(Rt,At),p(At,Dt),u(e,Wt,o),u(e,Ct,o),p(Ct,Gt),u(e,It,o),u(e,xt,o),p(xt,Ot),u(e,Nt,o),u(e,Ht,o),p(Ht,Lt),u(e,Bt,o),u(e,Ft,o),p(Ft,Mt),u(e,jt,o),u(e,Jt,o),p(Jt,Vt),u(e,qt,o),u(e,Kt,o),p(Kt,zt),u(e,Xt,o),u(e,Yt,o),p(Yt,Qt),u(e,Zt,o),u(e,$t,o),p($t,_t),u(e,ea,o),u(e,ta,o),p(ta,aa),p(ta,oa),p(oa,ra)},p:f,i:f,o:f,d(e){e&&d(t),e&&d(g),e&&d(m),e&&d(b),e&&d(w),e&&d(P),e&&d(k),e&&d(E),e&&d(T),e&&d(W),e&&d(C),e&&d(O),e&&d(N),e&&d(L),e&&d(B),e&&d(M),e&&d(j),e&&d(V),e&&d(q),e&&d(z),e&&d(X),e&&d(Q),e&&d(Z),e&&d(_),e&&d(ee),e&&d(ae),e&&d(oe),e&&d(ne),e&&d(ie),e&&d(he),e&&d(de),e&&d(ce),e&&d(ue),e&&d(fe),e&&d(ge),e&&d(ve),e&&d(be),e&&d(ye),e&&d(Pe),e&&d(Se),e&&d(Ee),e&&d(Re),e&&d(Ue),e&&d(De),e&&d(We),e&&d(Ge),e&&d(Ie),e&&d(Oe),e&&d(Ne),e&&d(Le),e&&d(Be),e&&d(Me),e&&d(je),e&&d(ze),e&&d(Xe),e&&d($e),e&&d(_e),e&&d(tt),e&&d(at),e&&d(rt),e&&d(nt),e&&d(st),e&&d(ht),e&&d(lt),e&&d(ct),e&&d(pt),e&&d(ft),e&&d(mt),e&&d(vt),e&&d(wt),e&&d(yt),e&&d(kt),e&&d(St),e&&d(Tt),e&&d(Rt),e&&d(Wt),e&&d(Ct),e&&d(It),e&&d(xt),e&&d(Nt),e&&d(Ht),e&&d(Bt),e&&d(Ft),e&&d(jt),e&&d(Jt),e&&d(qt),e&&d(Kt),e&&d(Xt),e&&d(Yt),e&&d(Zt),e&&d($t),e&&d(ea),e&&d(ta)}}}export default class extends e{constructor(e){super(),t(this,e,null,g,a,{})}}