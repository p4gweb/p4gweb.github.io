import{_ as e,a,b as t,c as o,i as r,d as n,S as s,s as i,e as h,t as l,f as d,g as c,h as f,j as u,k as p,l as m,m as b,n as g,o as w,p as v}from"./client.50071826.js";function y(e){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=a(e);if(o){var s=a(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return t(this,r)}}function P(e){var a,t,o,r,n,s,i,y,P,k,E,S,A,G,T,D,C,M,O,W,U,x,I,B,V,R,j,K,L,H,z,F,N,X,Q,q,J,_,Y,Z,$,ee,ae,te,oe,re,ne,se,ie,he,le,de,ce,fe,ue,pe,me,be,ge,we,ve,ye,Pe,ke,Ee,Se,Ae,Ge,Te,De,Ce,Me,Oe,We,Ue,xe,Ie,Be,Ve,Re,je,Ke,Le,He,ze,Fe,Ne,Xe,Qe,qe,Je,_e,Ye,Ze,$e,ea,aa,ta,oa,ra,na,sa,ia,ha,la,da,ca,fa,ua,pa,ma,ba,ga,wa,va,ya,Pa,ka,Ea,Sa,Aa,Ga,Ta,Da,Ca,Ma,Oa,Wa,Ua,xa,Ia,Ba,Va,Ra,ja,Ka,La,Ha,za,Fa,Na,Xa,Qa,qa,Ja,_a,Ya,Za,$a,et,at,tt,ot,rt,nt,st,it,ht,lt,dt,ct,ft,ut,pt,mt,bt,gt,wt,vt,yt,Pt,kt,Et,St,At,Gt,Tt,Dt,Ct,Mt,Ot,Wt;return{c:function(){a=h("p"),t=l("Phase 4 Ground Weekly Engineering Report! #dvb-receiver update, Snickerdoodle unbox and setup, and some Slack Analytics."),o=d(),r=h("p"),n=l("Video at "),s=h("a"),i=l("https://youtu.be/W13e0ds9HCA"),y=d(),P=h("p"),k=l("DVB-RECEIVER"),E=d(),S=h("p"),A=l("So let’s look at some technical work going on in the #dvb-receiver channel on the Phase 4 Ground Slack."),G=d(),T=h("p"),D=l("Implementing an open source version of DVB-S2 and DVB-S2X receive is a very ambitious goal, and Charles Brain G4GUO has been particularly active here, with Jan Schiefer AC7TD, Ron Economos W6RZ, Wally Ritchie WU1Y, and many others helping and participating."),C=d(),M=h("p"),O=l("Charles’ implementation uses a GPU — or graphical processing unit — to handle the heavy computation. His successful implementation of LDPC forward error correction decoding was demonstrated at the AMSAT Space Symposium in October 2017."),W=d(),U=h("p"),x=l("GPUs get their computational horsepower from massive parallelism, and this has some interesting implications for radio performance. In order to take full advantage of the parallel processors, Charles has it configured to process a batch of up to 128 frames at once. All the frames have to have the same “MODCOD” — modulation and coding."),I=d(),B=h("p"),V=l("Our air interface calls for the use of “adaptive coding and modulation,” ACM, so that we can accommodate a very wide variety of ground station types and capabilities and take full advantage of higher-performance ground stations. With ACM, the downlink contains a mix of frames with different modulations and coding formats. This means that the GPU version — or any radio with parallel processing — may need some extra accommodations."),R=d(),j=h("p"),K=l("If you want to read more about adaptive coding and modulation for Phase 4 Ground, here’s a link to our paper on GitHub:"),L=d(),H=h("p"),z=h("a"),F=l("https://github.com/phase4ground/documents/blob/master/Papers_Articles_Presentations/Papers/Adaptive%20Coding%20and%20Modulation%20for%20Phase%204%20Ground.pdf"),N=d(),X=h("p"),Q=l("// So what extra accommodations for the GPU are we talking about?"),q=d(),J=h("p"),_=l("With this kind of receiver, there’s a fundamental tradeoff between GPU utilization efficiency — how many of the CPU cores we keep busy — and latency — how much extra delay is caused by holding back frames until we have a full batch. If our goal is to keep the GPUs busy to maximize the compute speed, then we have to wait until 128 frames "),Y=h("em"),Z=l("of the same MODCOD"),$=l(" have arrived before we can start to process any of them. All 128 frames then come out of the receiver in a burst. The 128th frame is only delayed by the necessary minimum processing time, but the first frame has been delayed by an additional 127 frame times, "),ee=h("em"),ae=l("or more"),te=l(" if some of the intervening frames had a different MODCOD."),oe=d(),re=h("p"),ne=l("The first question is, do we "),se=h("em"),ie=l("need"),he=l(" to keep all the GPU cores busy? Probably not. It depends on just how fast the GPU cores can process frames, compared to the frame rate on the downlink. Maybe we only need to keep a fraction of the GPUs busy in order to keep up with the downlink, so maybe the magic number isn’t really 128, but something smaller. The only way we’ll find out for sure is to complete the GPU-based receiver implementation and benchmark it."),le=d(),de=h("p"),ce=l("The second question is, just how bad is the extra delay? If we stick with 128 frames to a batch, how much delay is that? Our air interface calls for using so-called “short frames,” as recommended for near-space communications by CCSDS, the Consultative Committee for Space Data Systems. Short frames in DVB-S2 and DVB-S2X are 16,200 bits long. To turn that into a duration, we need to know the effective bit rate of the channel."),fe=d(),ue=h("p"),pe=l("We’ve chosen a baseline bandwidth of 10 MHz and a 20% rolloff, which results in a fixed channel symbol rate of 8.333… megasymbols per second. The formula is:"),me=d(),be=h("p"),ge=l("bandwidth in Hz = 1.2 * carrier symbol rate in Hz"),we=d(),ve=h("p"),ye=l("where the .2 in 1.2 comes from the 20% rolloff. By the way, 20% rolloff is a good middle-of-the-road number. Industry groups say that DVB-S2 carriers below 10 Msps really need a guard band of at least 10% rolloff. The older DVB-S standard specified a fixed rolloff of 35%. The newer DVB-S2X goes all the way down to 5% rolloff."),Pe=d(),ke=h("p"),Ee=l("So, we have our fixed symbol rate. With adaptive coding and modulation, the code rate and the modulation order change. That means the data rate changes depending on how much extra help your receiver needs to successfully decode a frame. We have chosen six MODCODs for our initial implementation of ACM. If you work out the math, the nominal data rates for these MODCODs at our baseline symbol rate range from 4.054 Mbps to 21.067 Mbps. There’s a table in the notes."),Se=d(),Ae=h("p"),Ge=l("QPSK 4/15   4.054  Mbps\nQPSK 2/5    6.205  Mbps\nQPSK 2/3   10.506  Mbps\nQPSK 4/5   12.298  Mbps\n8PSK 5/6   19.459  Mbps\n8PSK 8/9   21.067  Mbps"),Te=d(),De=h("p"),Ce=l("The delay is longest at the lowest data rate, 4.054 Mbps. 128 frames of 16,200 bits is 2,073,600 bits, or about half a second. That’s assuming we transmit nothing but the slowest MODCOD. The delay could be much longer if ACM inserts lots of frames of other types."),Me=d(),Oe=h("p"),We=l("On the other end, 128 short frames at the highest data rate takes just a tenth of a second, but again that’s a lower bound if we allow ACM to insert other frames."),Ue=d(),xe=h("p"),Ie=l("These delays are on top of all the other delays in the system. For a Phase 4 satellite in GEO, there’s already a quarter of a second just in propagation delay. Adding a tenth of a second to that might not be a big deal. Adding half a second might be. It would depend on the application. For lower orbits or terrestrial systems, the calculation is different, of course."),Be=d(),Ve=h("p"),Re=l("We can’t improve these lower bounds, except by decreasing the number of frames we process in parallel. And we can only do that by making the processing faster, either by even more clever coding or by waiting for GPU hardware to get faster. We can’t improve latency by just arbitrarily reducing parallelism. If we go below the magic number needed to keep up with the channel rate, we will "),je=h("em"),Ke=l("still"),Le=l(" end up paying the latency price for all those frames we had to skip to keep up."),He=d(),ze=h("p"),Fe=l("On the other hand, we can try to avoid making the latency problem worse than it has to be. The simplest way to do that would be to fall back from ACM to CCM, constant coding and modulation. That is, transmit all frames with the same MODCOD. Unfortunately, by doing that we’d give up some very desirable flexibility in ground station designs."),Ne=d(),Xe=h("p"),Qe=l("Another simple approach would be to just accept that the parallel GPU-based implementation is only suitable for applications that aren’t sensitive to latency. Applications like file transfer care more about the overall data rate than about latency."),qe=d(),Je=h("p"),_e=l("There’s room here for us to invent a more complicated solution to take these tradeoffs into account. Some sort of dynamic scheduling algorithm that takes the latency requirements of each data stream into account could by devised to suit our needs. That’s called QoS, Quality of Service, and it’s a can of worms."),Ye=d(),Ze=h("p"),$e=l("Join the discussion on the #dvb-receiver channel on phase 4 ground slack!"),ea=d(),aa=h("p"),ta=l("SNICKERDOODLE"),oa=d(),ra=h("p"),na=l("Finally, here’s an unboxing and setup of another option for learning and programming FPGAs. This is a Snickerdoodle Black with a breakout board. It has a Xilinx Zynq 7020 and lot of interfaces and plenty of GPIOs exposed."),sa=d(),ia=h("p"),ha=l("SLACKALYTICS"),la=d(),da=h("p"),ca=l("We use Slack for engineering discussion and planning. It’s been a success. Here’s some analytics on all our channels and an engineering update from #dvb-receiver."),fa=d(),ua=h("p"),pa=l("This graph is messages sent since we established the account. 40,912\nThere are spikes and a trend up since early January."),ma=d(),ba=h("p"),ga=l("On top is where people are reading. The purple is public channels. The red is direct messages between members. The black represents a private channel. This private channel is for the badge build process. We’re keeping it private as to not reveal the puzzles and surprises."),wa=d(),va=h("p"),ya=l("The bottom graph is where messages are sent. Notice the difference? There are a lot of people following along in the public channels."),Pa=d(),ka=h("p"),Ea=l("On the top is messages sent over the past 30 days.\nOn the bottom is where people are reading over the past 30 days."),Sa=d(),Aa=h("p"),Ga=l("On the top is the messages sent in public channels and direct messages.\nOn the bottom is the one private channel, broken out."),Ta=d(),Da=h("p"),Ca=l("A lot of talking is going on in the private channel and we are very much looking forward to everyone seeing the results very soon."),Ma=d(),Oa=h("p"),Wa=l("WHO WE ARE"),Ua=d(),xa=h("p"),Ia=l("Phase 4 Ground home page "),Ba=h("a"),Va=l("https://phase4ground.github.io/"),Ra=d(),ja=h("p"),Ka=l("We are Phase 4 Ground and our mission is to implement an open source version of the DVB-S2 and DVB-S2X and Generic Stream Encapsulation (GSE) protocols for amateur radio, for both space and ground. The project includes the radios and a central server, or Groundsat. It’s named Groundsat because it’s a satellite simulator on the ground, providing the same functions a broadband microwave payload would in order to create a network."),La=d(),Ha=h("p"),za=l("All the Digital Video Broadcasting protocols that we are working with can be found for free at "),Fa=h("a"),Na=l("https://www.dvb.org/"),Xa=l(" and from links on our homepage."),Qa=d(),qa=h("p"),Ja=l("Note that GSE allows any digital data to be transmitted. We are not implementing a system limited to MPEG video."),_a=d(),Ya=h("p"),Za=l("DVB world conference is coming up! Anyone near Warsaw? That’s where it’s at for 2018."),$a=d(),et=h("p"),at=l("Our reference design is in GNU Radio and we have some of the blocks done. We need plenty more and upcoming videos will go into detail for each one."),tt=d(),ot=h("p"),rt=l("Learn all about GNU Radio here: "),nt=h("a"),st=l("https://www.gnuradio.org/"),it=d(),ht=h("p"),lt=l("Engineering for Phase 4 Ground is done primarily on our email list and Slack accounts."),dt=d(),ct=h("p"),ft=l("We have a YouTube playlist at "),ut=h("a"),pt=l("https://www.youtube.com/playlist?list=PLavdGnjBLuiX97DAKk32NJ1bCF1a0cv01"),mt=l(" that includes our video reports and videos that are of use or interest to Phase 4 Ground. Please subscribe and let us know what you’d like to hear about most."),bt=d(),gt=h("p"),wt=l("Phase 4 Space home page "),vt=h("a"),yt=l("https://phase4space.github.io/"),Pt=d(),kt=h("p"),Et=l("Phase 4 Space is an open source public domain project for broadband microwave amateur radio satellites because we want a lot of payloads to talk to! We’ll be using two wonderful open source resources to start. AO-10 blueprints and UPSat, the open source satellite currently operational, from Libre Space Foundation."),St=d(),At=h("p"),Gt=l("To volunteer directly for either, visit the AMSAT volunteer landing page "),Tt=h("a"),Dt=l("https://www.amsat.org/volunteer-for-amsat/"),Ct=l(" or send an email "),Mt=h("a"),Ot=l("w5nyv@arrl.net"),Wt=l(" to get started!"),this.h()},l:function(e){a=c(e,"P",{});var h=f(a);t=u(h,"Phase 4 Ground Weekly Engineering Report! #dvb-receiver update, Snickerdoodle unbox and setup, and some Slack Analytics."),h.forEach(p),o=m(e),r=c(e,"P",{});var l=f(r);n=u(l,"Video at "),s=c(l,"A",{href:!0,rel:!0});var d=f(s);i=u(d,"https://youtu.be/W13e0ds9HCA"),d.forEach(p),l.forEach(p),y=m(e),P=c(e,"P",{});var b=f(P);k=u(b,"DVB-RECEIVER"),b.forEach(p),E=m(e),S=c(e,"P",{});var g=f(S);A=u(g,"So let’s look at some technical work going on in the #dvb-receiver channel on the Phase 4 Ground Slack."),g.forEach(p),G=m(e),T=c(e,"P",{});var w=f(T);D=u(w,"Implementing an open source version of DVB-S2 and DVB-S2X receive is a very ambitious goal, and Charles Brain G4GUO has been particularly active here, with Jan Schiefer AC7TD, Ron Economos W6RZ, Wally Ritchie WU1Y, and many others helping and participating."),w.forEach(p),C=m(e),M=c(e,"P",{});var v=f(M);O=u(v,"Charles’ implementation uses a GPU — or graphical processing unit — to handle the heavy computation. His successful implementation of LDPC forward error correction decoding was demonstrated at the AMSAT Space Symposium in October 2017."),v.forEach(p),W=m(e),U=c(e,"P",{});var Ut=f(U);x=u(Ut,"GPUs get their computational horsepower from massive parallelism, and this has some interesting implications for radio performance. In order to take full advantage of the parallel processors, Charles has it configured to process a batch of up to 128 frames at once. All the frames have to have the same “MODCOD” — modulation and coding."),Ut.forEach(p),I=m(e),B=c(e,"P",{});var xt=f(B);V=u(xt,"Our air interface calls for the use of “adaptive coding and modulation,” ACM, so that we can accommodate a very wide variety of ground station types and capabilities and take full advantage of higher-performance ground stations. With ACM, the downlink contains a mix of frames with different modulations and coding formats. This means that the GPU version — or any radio with parallel processing — may need some extra accommodations."),xt.forEach(p),R=m(e),j=c(e,"P",{});var It=f(j);K=u(It,"If you want to read more about adaptive coding and modulation for Phase 4 Ground, here’s a link to our paper on GitHub:"),It.forEach(p),L=m(e),H=c(e,"P",{});var Bt=f(H);z=c(Bt,"A",{href:!0,rel:!0});var Vt=f(z);F=u(Vt,"https://github.com/phase4ground/documents/blob/master/Papers_Articles_Presentations/Papers/Adaptive%20Coding%20and%20Modulation%20for%20Phase%204%20Ground.pdf"),Vt.forEach(p),Bt.forEach(p),N=m(e),X=c(e,"P",{});var Rt=f(X);Q=u(Rt,"// So what extra accommodations for the GPU are we talking about?"),Rt.forEach(p),q=m(e),J=c(e,"P",{});var jt=f(J);_=u(jt,"With this kind of receiver, there’s a fundamental tradeoff between GPU utilization efficiency — how many of the CPU cores we keep busy — and latency — how much extra delay is caused by holding back frames until we have a full batch. If our goal is to keep the GPUs busy to maximize the compute speed, then we have to wait until 128 frames "),Y=c(jt,"EM",{});var Kt=f(Y);Z=u(Kt,"of the same MODCOD"),Kt.forEach(p),$=u(jt," have arrived before we can start to process any of them. All 128 frames then come out of the receiver in a burst. The 128th frame is only delayed by the necessary minimum processing time, but the first frame has been delayed by an additional 127 frame times, "),ee=c(jt,"EM",{});var Lt=f(ee);ae=u(Lt,"or more"),Lt.forEach(p),te=u(jt," if some of the intervening frames had a different MODCOD."),jt.forEach(p),oe=m(e),re=c(e,"P",{});var Ht=f(re);ne=u(Ht,"The first question is, do we "),se=c(Ht,"EM",{});var zt=f(se);ie=u(zt,"need"),zt.forEach(p),he=u(Ht," to keep all the GPU cores busy? Probably not. It depends on just how fast the GPU cores can process frames, compared to the frame rate on the downlink. Maybe we only need to keep a fraction of the GPUs busy in order to keep up with the downlink, so maybe the magic number isn’t really 128, but something smaller. The only way we’ll find out for sure is to complete the GPU-based receiver implementation and benchmark it."),Ht.forEach(p),le=m(e),de=c(e,"P",{});var Ft=f(de);ce=u(Ft,"The second question is, just how bad is the extra delay? If we stick with 128 frames to a batch, how much delay is that? Our air interface calls for using so-called “short frames,” as recommended for near-space communications by CCSDS, the Consultative Committee for Space Data Systems. Short frames in DVB-S2 and DVB-S2X are 16,200 bits long. To turn that into a duration, we need to know the effective bit rate of the channel."),Ft.forEach(p),fe=m(e),ue=c(e,"P",{});var Nt=f(ue);pe=u(Nt,"We’ve chosen a baseline bandwidth of 10 MHz and a 20% rolloff, which results in a fixed channel symbol rate of 8.333… megasymbols per second. The formula is:"),Nt.forEach(p),me=m(e),be=c(e,"P",{});var Xt=f(be);ge=u(Xt,"bandwidth in Hz = 1.2 * carrier symbol rate in Hz"),Xt.forEach(p),we=m(e),ve=c(e,"P",{});var Qt=f(ve);ye=u(Qt,"where the .2 in 1.2 comes from the 20% rolloff. By the way, 20% rolloff is a good middle-of-the-road number. Industry groups say that DVB-S2 carriers below 10 Msps really need a guard band of at least 10% rolloff. The older DVB-S standard specified a fixed rolloff of 35%. The newer DVB-S2X goes all the way down to 5% rolloff."),Qt.forEach(p),Pe=m(e),ke=c(e,"P",{});var qt=f(ke);Ee=u(qt,"So, we have our fixed symbol rate. With adaptive coding and modulation, the code rate and the modulation order change. That means the data rate changes depending on how much extra help your receiver needs to successfully decode a frame. We have chosen six MODCODs for our initial implementation of ACM. If you work out the math, the nominal data rates for these MODCODs at our baseline symbol rate range from 4.054 Mbps to 21.067 Mbps. There’s a table in the notes."),qt.forEach(p),Se=m(e),Ae=c(e,"P",{});var Jt=f(Ae);Ge=u(Jt,"QPSK 4/15   4.054  Mbps\nQPSK 2/5    6.205  Mbps\nQPSK 2/3   10.506  Mbps\nQPSK 4/5   12.298  Mbps\n8PSK 5/6   19.459  Mbps\n8PSK 8/9   21.067  Mbps"),Jt.forEach(p),Te=m(e),De=c(e,"P",{});var _t=f(De);Ce=u(_t,"The delay is longest at the lowest data rate, 4.054 Mbps. 128 frames of 16,200 bits is 2,073,600 bits, or about half a second. That’s assuming we transmit nothing but the slowest MODCOD. The delay could be much longer if ACM inserts lots of frames of other types."),_t.forEach(p),Me=m(e),Oe=c(e,"P",{});var Yt=f(Oe);We=u(Yt,"On the other end, 128 short frames at the highest data rate takes just a tenth of a second, but again that’s a lower bound if we allow ACM to insert other frames."),Yt.forEach(p),Ue=m(e),xe=c(e,"P",{});var Zt=f(xe);Ie=u(Zt,"These delays are on top of all the other delays in the system. For a Phase 4 satellite in GEO, there’s already a quarter of a second just in propagation delay. Adding a tenth of a second to that might not be a big deal. Adding half a second might be. It would depend on the application. For lower orbits or terrestrial systems, the calculation is different, of course."),Zt.forEach(p),Be=m(e),Ve=c(e,"P",{});var $t=f(Ve);Re=u($t,"We can’t improve these lower bounds, except by decreasing the number of frames we process in parallel. And we can only do that by making the processing faster, either by even more clever coding or by waiting for GPU hardware to get faster. We can’t improve latency by just arbitrarily reducing parallelism. If we go below the magic number needed to keep up with the channel rate, we will "),je=c($t,"EM",{});var eo=f(je);Ke=u(eo,"still"),eo.forEach(p),Le=u($t," end up paying the latency price for all those frames we had to skip to keep up."),$t.forEach(p),He=m(e),ze=c(e,"P",{});var ao=f(ze);Fe=u(ao,"On the other hand, we can try to avoid making the latency problem worse than it has to be. The simplest way to do that would be to fall back from ACM to CCM, constant coding and modulation. That is, transmit all frames with the same MODCOD. Unfortunately, by doing that we’d give up some very desirable flexibility in ground station designs."),ao.forEach(p),Ne=m(e),Xe=c(e,"P",{});var to=f(Xe);Qe=u(to,"Another simple approach would be to just accept that the parallel GPU-based implementation is only suitable for applications that aren’t sensitive to latency. Applications like file transfer care more about the overall data rate than about latency."),to.forEach(p),qe=m(e),Je=c(e,"P",{});var oo=f(Je);_e=u(oo,"There’s room here for us to invent a more complicated solution to take these tradeoffs into account. Some sort of dynamic scheduling algorithm that takes the latency requirements of each data stream into account could by devised to suit our needs. That’s called QoS, Quality of Service, and it’s a can of worms."),oo.forEach(p),Ye=m(e),Ze=c(e,"P",{});var ro=f(Ze);$e=u(ro,"Join the discussion on the #dvb-receiver channel on phase 4 ground slack!"),ro.forEach(p),ea=m(e),aa=c(e,"P",{});var no=f(aa);ta=u(no,"SNICKERDOODLE"),no.forEach(p),oa=m(e),ra=c(e,"P",{});var so=f(ra);na=u(so,"Finally, here’s an unboxing and setup of another option for learning and programming FPGAs. This is a Snickerdoodle Black with a breakout board. It has a Xilinx Zynq 7020 and lot of interfaces and plenty of GPIOs exposed."),so.forEach(p),sa=m(e),ia=c(e,"P",{});var io=f(ia);ha=u(io,"SLACKALYTICS"),io.forEach(p),la=m(e),da=c(e,"P",{});var ho=f(da);ca=u(ho,"We use Slack for engineering discussion and planning. It’s been a success. Here’s some analytics on all our channels and an engineering update from #dvb-receiver."),ho.forEach(p),fa=m(e),ua=c(e,"P",{});var lo=f(ua);pa=u(lo,"This graph is messages sent since we established the account. 40,912\nThere are spikes and a trend up since early January."),lo.forEach(p),ma=m(e),ba=c(e,"P",{});var co=f(ba);ga=u(co,"On top is where people are reading. The purple is public channels. The red is direct messages between members. The black represents a private channel. This private channel is for the badge build process. We’re keeping it private as to not reveal the puzzles and surprises."),co.forEach(p),wa=m(e),va=c(e,"P",{});var fo=f(va);ya=u(fo,"The bottom graph is where messages are sent. Notice the difference? There are a lot of people following along in the public channels."),fo.forEach(p),Pa=m(e),ka=c(e,"P",{});var uo=f(ka);Ea=u(uo,"On the top is messages sent over the past 30 days.\nOn the bottom is where people are reading over the past 30 days."),uo.forEach(p),Sa=m(e),Aa=c(e,"P",{});var po=f(Aa);Ga=u(po,"On the top is the messages sent in public channels and direct messages.\nOn the bottom is the one private channel, broken out."),po.forEach(p),Ta=m(e),Da=c(e,"P",{});var mo=f(Da);Ca=u(mo,"A lot of talking is going on in the private channel and we are very much looking forward to everyone seeing the results very soon."),mo.forEach(p),Ma=m(e),Oa=c(e,"P",{});var bo=f(Oa);Wa=u(bo,"WHO WE ARE"),bo.forEach(p),Ua=m(e),xa=c(e,"P",{});var go=f(xa);Ia=u(go,"Phase 4 Ground home page "),Ba=c(go,"A",{href:!0,rel:!0});var wo=f(Ba);Va=u(wo,"https://phase4ground.github.io/"),wo.forEach(p),go.forEach(p),Ra=m(e),ja=c(e,"P",{});var vo=f(ja);Ka=u(vo,"We are Phase 4 Ground and our mission is to implement an open source version of the DVB-S2 and DVB-S2X and Generic Stream Encapsulation (GSE) protocols for amateur radio, for both space and ground. The project includes the radios and a central server, or Groundsat. It’s named Groundsat because it’s a satellite simulator on the ground, providing the same functions a broadband microwave payload would in order to create a network."),vo.forEach(p),La=m(e),Ha=c(e,"P",{});var yo=f(Ha);za=u(yo,"All the Digital Video Broadcasting protocols that we are working with can be found for free at "),Fa=c(yo,"A",{href:!0,rel:!0});var Po=f(Fa);Na=u(Po,"https://www.dvb.org/"),Po.forEach(p),Xa=u(yo," and from links on our homepage."),yo.forEach(p),Qa=m(e),qa=c(e,"P",{});var ko=f(qa);Ja=u(ko,"Note that GSE allows any digital data to be transmitted. We are not implementing a system limited to MPEG video."),ko.forEach(p),_a=m(e),Ya=c(e,"P",{});var Eo=f(Ya);Za=u(Eo,"DVB world conference is coming up! Anyone near Warsaw? That’s where it’s at for 2018."),Eo.forEach(p),$a=m(e),et=c(e,"P",{});var So=f(et);at=u(So,"Our reference design is in GNU Radio and we have some of the blocks done. We need plenty more and upcoming videos will go into detail for each one."),So.forEach(p),tt=m(e),ot=c(e,"P",{});var Ao=f(ot);rt=u(Ao,"Learn all about GNU Radio here: "),nt=c(Ao,"A",{href:!0,rel:!0});var Go=f(nt);st=u(Go,"https://www.gnuradio.org/"),Go.forEach(p),Ao.forEach(p),it=m(e),ht=c(e,"P",{});var To=f(ht);lt=u(To,"Engineering for Phase 4 Ground is done primarily on our email list and Slack accounts."),To.forEach(p),dt=m(e),ct=c(e,"P",{});var Do=f(ct);ft=u(Do,"We have a YouTube playlist at "),ut=c(Do,"A",{href:!0,rel:!0});var Co=f(ut);pt=u(Co,"https://www.youtube.com/playlist?list=PLavdGnjBLuiX97DAKk32NJ1bCF1a0cv01"),Co.forEach(p),mt=u(Do," that includes our video reports and videos that are of use or interest to Phase 4 Ground. Please subscribe and let us know what you’d like to hear about most."),Do.forEach(p),bt=m(e),gt=c(e,"P",{});var Mo=f(gt);wt=u(Mo,"Phase 4 Space home page "),vt=c(Mo,"A",{href:!0,rel:!0});var Oo=f(vt);yt=u(Oo,"https://phase4space.github.io/"),Oo.forEach(p),Mo.forEach(p),Pt=m(e),kt=c(e,"P",{});var Wo=f(kt);Et=u(Wo,"Phase 4 Space is an open source public domain project for broadband microwave amateur radio satellites because we want a lot of payloads to talk to! We’ll be using two wonderful open source resources to start. AO-10 blueprints and UPSat, the open source satellite currently operational, from Libre Space Foundation."),Wo.forEach(p),St=m(e),At=c(e,"P",{});var Uo=f(At);Gt=u(Uo,"To volunteer directly for either, visit the AMSAT volunteer landing page "),Tt=c(Uo,"A",{href:!0,rel:!0});var xo=f(Tt);Dt=u(xo,"https://www.amsat.org/volunteer-for-amsat/"),xo.forEach(p),Ct=u(Uo," or send an email "),Mt=c(Uo,"A",{href:!0});var Io=f(Mt);Ot=u(Io,"w5nyv@arrl.net"),Io.forEach(p),Wt=u(Uo," to get started!"),Uo.forEach(p),this.h()},h:function(){b(s,"href","https://youtu.be/W13e0ds9HCA"),b(s,"rel","nofollow"),b(z,"href","https://github.com/phase4ground/documents/blob/master/Papers_Articles_Presentations/Papers/Adaptive%20Coding%20and%20Modulation%20for%20Phase%204%20Ground.pdf"),b(z,"rel","nofollow"),b(Ba,"href","https://phase4ground.github.io/"),b(Ba,"rel","nofollow"),b(Fa,"href","https://www.dvb.org/"),b(Fa,"rel","nofollow"),b(nt,"href","https://www.gnuradio.org/"),b(nt,"rel","nofollow"),b(ut,"href","https://www.youtube.com/playlist?list=PLavdGnjBLuiX97DAKk32NJ1bCF1a0cv01"),b(ut,"rel","nofollow"),b(vt,"href","https://phase4space.github.io/"),b(vt,"rel","nofollow"),b(Tt,"href","https://www.amsat.org/volunteer-for-amsat/"),b(Tt,"rel","nofollow"),b(Mt,"href","mailto:w5nyv@arrl.net")},m:function(e,h){g(e,a,h),w(a,t),g(e,o,h),g(e,r,h),w(r,n),w(r,s),w(s,i),g(e,y,h),g(e,P,h),w(P,k),g(e,E,h),g(e,S,h),w(S,A),g(e,G,h),g(e,T,h),w(T,D),g(e,C,h),g(e,M,h),w(M,O),g(e,W,h),g(e,U,h),w(U,x),g(e,I,h),g(e,B,h),w(B,V),g(e,R,h),g(e,j,h),w(j,K),g(e,L,h),g(e,H,h),w(H,z),w(z,F),g(e,N,h),g(e,X,h),w(X,Q),g(e,q,h),g(e,J,h),w(J,_),w(J,Y),w(Y,Z),w(J,$),w(J,ee),w(ee,ae),w(J,te),g(e,oe,h),g(e,re,h),w(re,ne),w(re,se),w(se,ie),w(re,he),g(e,le,h),g(e,de,h),w(de,ce),g(e,fe,h),g(e,ue,h),w(ue,pe),g(e,me,h),g(e,be,h),w(be,ge),g(e,we,h),g(e,ve,h),w(ve,ye),g(e,Pe,h),g(e,ke,h),w(ke,Ee),g(e,Se,h),g(e,Ae,h),w(Ae,Ge),g(e,Te,h),g(e,De,h),w(De,Ce),g(e,Me,h),g(e,Oe,h),w(Oe,We),g(e,Ue,h),g(e,xe,h),w(xe,Ie),g(e,Be,h),g(e,Ve,h),w(Ve,Re),w(Ve,je),w(je,Ke),w(Ve,Le),g(e,He,h),g(e,ze,h),w(ze,Fe),g(e,Ne,h),g(e,Xe,h),w(Xe,Qe),g(e,qe,h),g(e,Je,h),w(Je,_e),g(e,Ye,h),g(e,Ze,h),w(Ze,$e),g(e,ea,h),g(e,aa,h),w(aa,ta),g(e,oa,h),g(e,ra,h),w(ra,na),g(e,sa,h),g(e,ia,h),w(ia,ha),g(e,la,h),g(e,da,h),w(da,ca),g(e,fa,h),g(e,ua,h),w(ua,pa),g(e,ma,h),g(e,ba,h),w(ba,ga),g(e,wa,h),g(e,va,h),w(va,ya),g(e,Pa,h),g(e,ka,h),w(ka,Ea),g(e,Sa,h),g(e,Aa,h),w(Aa,Ga),g(e,Ta,h),g(e,Da,h),w(Da,Ca),g(e,Ma,h),g(e,Oa,h),w(Oa,Wa),g(e,Ua,h),g(e,xa,h),w(xa,Ia),w(xa,Ba),w(Ba,Va),g(e,Ra,h),g(e,ja,h),w(ja,Ka),g(e,La,h),g(e,Ha,h),w(Ha,za),w(Ha,Fa),w(Fa,Na),w(Ha,Xa),g(e,Qa,h),g(e,qa,h),w(qa,Ja),g(e,_a,h),g(e,Ya,h),w(Ya,Za),g(e,$a,h),g(e,et,h),w(et,at),g(e,tt,h),g(e,ot,h),w(ot,rt),w(ot,nt),w(nt,st),g(e,it,h),g(e,ht,h),w(ht,lt),g(e,dt,h),g(e,ct,h),w(ct,ft),w(ct,ut),w(ut,pt),w(ct,mt),g(e,bt,h),g(e,gt,h),w(gt,wt),w(gt,vt),w(vt,yt),g(e,Pt,h),g(e,kt,h),w(kt,Et),g(e,St,h),g(e,At,h),w(At,Gt),w(At,Tt),w(Tt,Dt),w(At,Ct),w(At,Mt),w(Mt,Ot),w(At,Wt)},p:v,i:v,o:v,d:function(e){e&&p(a),e&&p(o),e&&p(r),e&&p(y),e&&p(P),e&&p(E),e&&p(S),e&&p(G),e&&p(T),e&&p(C),e&&p(M),e&&p(W),e&&p(U),e&&p(I),e&&p(B),e&&p(R),e&&p(j),e&&p(L),e&&p(H),e&&p(N),e&&p(X),e&&p(q),e&&p(J),e&&p(oe),e&&p(re),e&&p(le),e&&p(de),e&&p(fe),e&&p(ue),e&&p(me),e&&p(be),e&&p(we),e&&p(ve),e&&p(Pe),e&&p(ke),e&&p(Se),e&&p(Ae),e&&p(Te),e&&p(De),e&&p(Me),e&&p(Oe),e&&p(Ue),e&&p(xe),e&&p(Be),e&&p(Ve),e&&p(He),e&&p(ze),e&&p(Ne),e&&p(Xe),e&&p(qe),e&&p(Je),e&&p(Ye),e&&p(Ze),e&&p(ea),e&&p(aa),e&&p(oa),e&&p(ra),e&&p(sa),e&&p(ia),e&&p(la),e&&p(da),e&&p(fa),e&&p(ua),e&&p(ma),e&&p(ba),e&&p(wa),e&&p(va),e&&p(Pa),e&&p(ka),e&&p(Sa),e&&p(Aa),e&&p(Ta),e&&p(Da),e&&p(Ma),e&&p(Oa),e&&p(Ua),e&&p(xa),e&&p(Ra),e&&p(ja),e&&p(La),e&&p(Ha),e&&p(Qa),e&&p(qa),e&&p(_a),e&&p(Ya),e&&p($a),e&&p(et),e&&p(tt),e&&p(ot),e&&p(it),e&&p(ht),e&&p(dt),e&&p(ct),e&&p(bt),e&&p(gt),e&&p(Pt),e&&p(kt),e&&p(St),e&&p(At)}}}var k=function(a){e(h,s);var t=y(h);function h(e){var a;return o(this,h),a=t.call(this),r(n(a),e,null,P,i,{}),a}return h}();export default k;
