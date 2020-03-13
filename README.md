# Browser Technologies @cmda-minor-web 1920
//Robuuste, toegankelijke websites ontwerpen en maken …

In het vak Browser Technologies leer je hoe je goede, robuuste, toegankelijke websites maakt. Je gaat leren over Progressive Enhancement, Feature Detection en Fallback. Het web is er voor iedereen. In dit vak leer je hoe je daarvoor kan zorgen.

Een van de mooiste principes van het web is dat het er echt is voor iedereen. Iedereen met een computer en een browser moet gebruik kunnen maken van het web. Het web is geen gecontroleerde (programmeer) omgeving. Je kan er gerust van uit gaan dat niemand precies hetzelfde te zien krijgt als wat jij ziet in jouw browser. Er zijn natuurlijk de technische beperkingen. Zoals - Afmetingen van de browser - Grootte van het apparaat - Manier van interactie - Kwaliteit van de hardware - Kwaliteit van het netwerk. En er zijn mensen. Allemaal verschillende mensen ... Hoe zorg je er dan voor dat websites het altijd doen?

## Leerdoelen
- _Wat is Progressive enhancement en hoe kun je dit toepassen._
- _Hoe doe je Feature Detection en wat doe je als een techniek niet werkt of wordt ondersteund._
- _Leren een Browser Technologies onderzoeken, testen en implementeren als enhancement._

[Rubric](https://docs.google.com/spreadsheets/d/1MV3BWwwg_Zz1n-S_qOM4iSm4gA4M6g0xAxGacyaPuac/edit?usp=sharing)

## Planning

| Planning  | Woensdag  |  Donderdag | Vrijdag  |
|---|---|---|---|
| <a href=#week-1>Week 1</a>  | Introductie, College over Progressive enhancement + briefing opdracht 1.1 | College Browser detect + presentaties opdracht 1.1 + briefing opdracht 1.2 Fork je OBA  | Feedbackgesprekken + Bowlen! |
| <a href=#week-2>Week 2</a>  | College Feature detect + Briefing opdracht 2  | College Browsers + werken aan de opdracht | Feedbackgesprekken  |
| <a href=#week-3>Week 3</a>  | College Notificaties + werken aan de opdracht  |  Werken aan de opdracht | Beoordelingsgesprekken  |



## Programma

### Week 1
Het web is voor iedereen. Leren over Progressive enhancement en kennismaken met testen en het device lab. [Planning week 1](./slides/Week1.png)

#### Woensdag
- [Les 1 - Progressive enhancement & Briefing Opdracht 1.1](./slides/BT1920%20College%20Les1%20-%20Progressive%20Enhancement.pdf)
- [Opdracht 1.1 - Breek het web](Opdracht1.1.md)

#### Weekly Nerd
Sanne 't Hooft over Interactie. Woensdag 11 Maart, 16:00 in het minorlokaal.

#### Donderdag
- [Les 2 - Features testen & Briefing opdracht 1.2](./slides/BT1920%20College%20Les2%20-%20Progressive%20Enhancement.pdf)
- [Opdracht 1.2 - Fork je OBA](Opdracht1.2.md)

Deze les gaan we onderstaande artikelen bespreken:
- [Everyone has JavaScript, right? by Stuart Langridge](https://kryogenix.org/code/browser/everyonehasjs.html)
- [The Web I Want by Chris James](https://dev.to/quii/the-web-i-want-43o)


#### Vrijdag
Feedbackgesprekken opdracht 1.2 in groepjes, met studentassistenten en docenten.

Deze les gaan we onderstaand artikel bespreken:
- [Lezen: Understanding Progressive Enhancement by Aaron Gustafson](https://alistapart.com/article/understandingprogressiveenhancement)





### Week 2
Wat laat je zien als een browser of gebruiker een 'enhancement' niet kan tonen of zien? Hoe doe je Feature Detection en wat doe je als een techniek niet werkt of wordt ondersteund? [Planning week 2](./slides/Week2.png)

#### Woensdag
- [Les 3 - Over Feature detect & Briefing opdracht 2]()
- [Opdracht 2 - Progressive Enhanced Browser Technologie](Opdracht2.md)

Deze les gaan we onderstaande artikelen bespreken:
- [HTML: The Inaccessible Parts](https://daverupert.com/2020/02/html-the-inaccessible-parts/)
- [Accessibility Through Semantic HTML by Laura Kalbag](https://24ways.org/2017/accessibility-through-semantic-html/)


#### Weekly Nerd
PE bij de Voorhoede.


#### Donderdag
- [Les 4 - Over Browsers]()

Deze les gaan we onderstaande artikelen bespreken:
- [The accessibility mindset by Eric Eggert](https://24ways.org/2015/the-accessibility-mindset/)
- [The Role of Enhancement in Web Design by Raluca Budiu / Nielsen Norman Group](https://www.nngroup.com/articles/enhancement/)


#### Vrijdag
Code review en feedbackgesprekken opdracht 2.




### Week 3
Deze week werken we verder aan opdracht 2. [Planning week 3](./slides/Week3.png)


#### Woensdag
- [Les 5 - Over Notificaties]()

Deze les gaan we onderstaande artikelen bespreken:
- [Progressive Enhancement and Data Visualizations by Chris Coyier](https://css-tricks.com/progressive-enhancement-data-visualizations/)
- [Make the Web Work For Everyone by Justin Crawford, Chris Mills, Ali Spivak](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/)


#### Weekly Nerd
Op bezoek bij Bol.com


#### Donderdag
Verder werken aan opdracht 2



#### Vrijdag
Code review en beoordelingsgesprekken opdracht 2.

## opdracht 1.2

Link to the site: [link](https://heralt.github.io/project-1-1920/)

#### Chrome: 
- Afbeeldingen uitzetten:

In de instellingen van chrome heb ik de afbeeldingen uitgezet, om het niet kunnen laden van afbeeldingen te simuleren. Hierdoor kreeg je de kaften van het boek niet meer te zien. Maar omdat we de titel van het boek uit de API en onder de kaft ook lieten zien, was het nog mogelijk om een boek te vinden. Als de gebruiker zocht naar een specifieke titel, dan is de site nog te gebruiken.
- custom fonts uitzetten:


- kleur / kleurenblindheid:

Om dit te simuleren heb ik een extension gedownload die in de browser laat zien wat verschillende soorten kleuren blinde mensen zien als ze naar de site kijken. 
De site is goed te gebruiken. De zoek knoppen en balk zijn heel duidelijk en de titel van de boeken onder de kaft is ook goed te lezen. Wat minder goed te lezen is, zijn de kaften van de boeken. De kleuren die op de kaften worden gebruikt, maken de titel soms onleesbaar. 
- muis / trackpad werkt niet: 

Voor deze test heb ik gebruik gemaakt van de tab en de pijlen knoppen. Het gebruiken van de site was mogelijk, maar heel erg vervelend. Als je naar een boek zocht, moet je een voor een langs alle boeken tabben voordat je op het boek dat je wilt enter kan drukken. 
- breedband internet uitzetten: 

Voor deze test heb ik in de devtools in de netwerk tab, de preset op slow 3g gezet. De site hierdoor langzamer, maar het gebruiken werd niet vervelend. De knoppen werden meteen geladen en de afbeeldingen van de kaften werden wat later langzaam ook gerendered. Wat meest vervelend was, was naar de detailpagina van een boek gaan. Als er op een boek geklikt werd, leek het alsof er niks gebeurde terwijl de pagina geladen werd. Het zou duidelijker zijn, als er een indicatie was dat de browser iets aan het doen is.

- javascript uitzetten:

Het uitzetten van javascript deed ik in de instellingen van de browser. ALs ik dit deed, kreeg ik geen boeken meer uit de API. De knoppen werkten ook niet meer en de zoekbalk ook niet. 
- cookies uitzetten: 

Bij het uitzetten van de cookies in mijn instellingen, gebeurde er niks geks. de site werkte naar behoren. 
- local storage doet 't niet: 

Op deze [site](https://mid.as/kb/00103/enable-disable-or-clear-web-storage-cache), wordt uitgelegd hoe ik mijn webstorage uit kon zetten. Na dit gedaan te hebben, werkt de site nog als normaal. Het gebruiken van de site werd niet geblokeerd, net als bij andere sites. Verder hebben we in onze site ook geen gebruik gemaakt van local storage, dus dat er niks gebeurt is logisch.

#### Firefox:

- Afbeeldingen uitzetten:

In firefox heb ik dit aangepast door permissions.default.iamge op 2 te zetten. Het resultaat is het zelfde als wat er in Chrome gebeurt. De site werkt normaal, alleen je ziet de kaften van de boeken niet. Maar omdat we de titel onderaan de kaften ook laten zien, is dit geen probleem. 
- custom fonts uitzetten:

Het uitzetten van custom-fonts, deed ik door gfx.downloadable_fonts.enabled op false te zetten. Er veranderde niks op onze site, alles ziet eruit als hoe wij het designed hadden.
- kleur / kleurenblindheid:

Net als bij chrome heb ik hiervoor een extension gedownload, om kleurenblindheid te simuleren. Net als bij chrome is de site goed te gebruiken, behalve dat de kaften af en toe lastig te lezen zijn. 
- muis / trackpad werkt niet: 

Gebruik maken van de tab en pijlenknoppen is in deze browser ook niet heel efficient, maar het werkt wel. Ik zou kunnen toevoegen om te navigeren met alleen de pijlen knoppen. 
- breedband internet uitzetten: 

Ik heb dit getest door in de devtool in de netwerk tab, de internet snelheid op regular 2G te zetten. Het laden van nieuwe fetches duurde het langst. Het laden van de detail pagina ging relatief snel. Het gebruiken van de site werd verder niet onmogelijk. 
- javascript uitzetten:

Nadat ik javascript.enabled of false had gezet, werkte onze javascript helemaal niet meer, dus kreeg ik geen boeken te zien op de pagina. Dit is het zelde als in de Chrome browser. 
- cookies uitzetten: 

Dit heb ik gedaan door de cookies uit te zetten in de instellingen. Er zijn geen problemen met het gebruiken van de site, alles werkt naar behoren.

#### Opera: 

- Afbeeldingen uitzetten:

Dit is het zelfde net als in de vorige twee browsers. De site is goed te gebruiken, maar er zijn geen kaften meer te zien. 
- custom fonts uitzetten:


- kleur / kleurenblindheid:

Ik heb een extension gebruikt om dit te testen, net als in de Chrome en firefox browser en de resultaten zijn het zelfde. 
- muis / trackpad werkt niet: 

De resultaten van de het testen van dit zijn het zelfde als de voorgaande browsers. Het werkt maar het is geen fijne manier van de site gebruiken.
- breedband internet uitzetten: 

Net als bij de vorige browsers, als iemand een slechte verbinding heeft(2 of 3G) werkt de site nog snel genoeg. Het bezoeken van de site wordt niet vervelend.
- javascript uitzetten:

Net als bij de vorige browsers kan er nu niet meer naar boeken gezogd worden. 
- cookies uitzetten: 

Net als bij de vorige browsers zorgt dit niet voor problemen.

### Devices

#### Iphone

#### Ipad

#### Android tablet

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
