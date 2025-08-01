<link rel="stylesheet" href="pseudo.css">

# A Pszeudokód problémái és ezek javasolt megoldásai

- TOC
{:toc}

## Előszó

A Pszeudokód egy C-szerű nyelvet utánzó ál-programozási nyelv, mely
célja az algoritmusok egyes programozási nyelvekre jellemző sajátságos
tulajdonságok használata nélkül, egységesen és egyszerűen megérthető
módon való rögzítése.

Ez a dokumentum arra próbál rávilágítani, hogy a szerkezetek, melyek a
diákok segítésére lettek kitalálva, valójában megnehezíthetik az
algoritmusok való életben való alkalmazását és megoldást is próbál
nyújtani ezekre.

### Mit állít ez a dokumentum?

- Hogy ezen javaslatok közül néhány vagy akár az összes
  implementálásával egyértelműbbé és egyszerűbbé válhat a Pszeudokód.

- Hogy, ha a Pszeudokód jobban hasonlít egy valódi nyelvhez, az
  könnyebbé teszi a benne leírt algoritmusok lefordítását és felhasználását.

### Mit NEM állít ez a dokumentum?

- Hogy ezek a javaslatok tényszerűen jobbak. Bár igyekeztem az
  ismeretségi köröm nagy hányadától tanácsot kérni, természetesen a
  mintavételezés így is aránylag kicsi halmazból történt, így lehet
  egyes javaslatok a többség számára kedvezőtlennek hatnának.

- Hogy a Pszeudokód rossz volna. Logikus, hogy szükséges egy olyan
  nyelv, mely a programozási nyelvek sajátságaitól mentes, így
  bármilyen más nyelvre könnyen fordítható. A dokumentum csupán a
  nyelv dizájnjának részleteit kérdőjelezi meg.

## I. Szintaxis

Az egyik első ok, mely miatt megfogalmazódott bennem ennek a
dokumentumnak a létrehozása a szintaxis volt, mely több általam vélt
problémát is magában hordoz.

### a. Hozzárendelés

Első változtatásképp elhagyjuk az '<-' jelölést, melyet a
matematikából ismert egyenlőségjellel helyettesítünk. Ugyanígy, egy
egyetemi hallgató számára nem jelenthet nehézséget, hogy megértse a
'(operátor)=' jelölés értelmét is.

    i <- 1
    i <- i + 5

Helyett:

    i = 1
    i += 5

### b. Scope-ok jelölése

Jelenleg a Pszeudokód a '(kulcsszó) vége' jelöléssel zárja le a
scope-okat. Ez azonban ahhoz vezet, hogy a kódot több fölösleges szó
teszi átláthatatlanabbá, hisz nem közvetít új információt, hogy mit is
zárunk le, ugyanis ezt a behúzás mértéke már elárulja nekünk. Ezek
helyett az új Pszeudokód Allman-stílusú kapcsos-zárójelekkel jelzi a
scope-ok határait.

    i <- 0

    ciklus amíg (i < 10)
        ha (i < 5) akkor
            i <- i * 2
        különben
            i <- i + 1
        elágazás vége
    ciklus vége

Helyett:

    i = 0

    ciklus amíg (i < 10)
    {
        ha (i < 5) akkor
        {
            i *= 2
        }
        különben
        {
            i += 1
        }
    }

Abban az esetben, ha az új scope csak egy sorból áll, a
kapcsos-zárójelek elhagyhatók.

    i = 0

    ciklus  (i < 10)
    {
        ha (i < 5)
            i *= 2
        különben
            i += 1
    }

### c. Az "akkor" szó elhagyása az elágazásokból.

Hasonlóan az előző pontban megfogalmazottakhoz, a "Ha (feltétel)
akkor" szerkezet is lerövidíthető információvesztés nélkül szimplán
"Ha (feltétel)"-re.

    ha (5 < 6) akkor
        ... további kód
    különben ha (8 > 4) akkor
        ... kód ami nem fog lefutni
    elágazás vége

Helyett:

    ha (5 < 6)
    {
        ... további kód
    }
    különben ha (8 > 4)
    {
        ... kód ami nem fog lefutni
    }

### d. A ciklusok egyértelműbbé tétele

A Pszeudokód jelenleg kétféle ciklust tesz lehetővé:

- Számtartományon átlépkedő ('for')

        ciklus i = 1-től 10-ig
            ... az i fölvesz minden értéket 1-től 10-ig
        ciklus vége

- Predikátum-alapú ('while')

        ciklus amíg ~P(x)
            ... amíg P(x) igazzá nem válik, a kód ismétlődni fog
        ciklus vége

Mindkettőt minimálisan változtatnám csak. A számtartomány-alapú ciklus
jelölését a következővé változtatnám:

    ciklus i = 1 -> 10
    {
        ... az i fölvesz minden értéket 1-től 10-ig
    }

Ugyanannyira könnyű megérteni, de rövidebb és a "-tól/-től" és "-ig"
szerepét egy egységes jel veszi át.

A predikátum-alapú ciklusnál pedig elhagynám a "ciklus" szót.

    amíg ~P(x)
    {
        ... amíg P(x) igazzá nem válik, a kód ismétlődni fog
    }

Így az olvasó számára egyértelmű melyik ciklussal is van dolga a sor
legelső szavának elolvasásától.

### c. Változók

Bár a Pszeudokód már jelenlegi állapotában is nyújt limitált
lehetőségeket a típusok deklarálására, az új változatban kötelezővé
tennénk minden új változó típusának jelölését. Ez egységesítené a
tömbök létrehozását is, megszüntetve a "Létrehozás" függvény
szükségességét.

    i <- 5
    x <- Létrehoz(egész)[i]

Helyett:

    egész i = 5
    egész[i] x

Ezáltal az olvasó szeme rögtön a változó elé ugrik, ha annak típusát
akarja tudni, azonnal egyértelművé téve milyen változóval is van
dolga.

### d. Indexelés

Bár elsőre logikusnak hangzik, hogy egytől kezdjük a tömbök
indexelését, a programozási nyelvek túlnyomó hányadában szimplán
architektúrális okokból a nullától való indexelés terjedt el.

Ennek elfelejtése, miközben más nyelvre implementáljuk az algoritmust
könnyen vezethet az első elem kihagyásához, vagy egy a tömb határainak
túllépése miatt fellépő futásidei hibához.

Hogy ezt elkerülhessük az új Pszeudokód idomulna a valós programozási
nyelvekhez és szintén nulla-indexeltté válna.

    x <- Létrehoz(egész)[2]
    x[1] <- 3
    x[2] <- 5

Helyett:

    egész[2] x
    x[0] = 3
    x[1] = 5

Bár ez elsőre némi félreértéshez vezethet, miszerint az olvasó esetleg
a tömb (n+1).-edik elemét keresheti az n.-edik helyén, ám némi
gyakorlással hamar kiküszöbőlődik. Cserébe a fentebb említett
esetleges problémák megszűnnek.

### e. 'Break' vagyis ciklusból való kiugrás

A 'break' utasítás használatának meg nem engedése több algoritmust is
fölöslegesen bonyolít, hosszabbá és nehézkesebbé téve őket. Az új
Pszeudokódban tehát engedélyezve van.

A kulcsszót ebben a dokumentumban "kiugrás"-nak fogom fordítani, mivel jól
demonstrálja, hogy valójában mi is a célunk, amikor ezt látjuk a kódban és
semelyik másik kulcsszóra se hasonlít.

Az algoritmusok közül rengetegben fordul elő az Eldöntés tétel alkalmazása,
mely eldönti, egy tömb elemei közül bármelyik is teljesít-e egy tulajdonságot.
Ez lehet egy predikátumfüggvény, vagy bármely más tulajdonság, mint például az
elem egy számtartományon belül való tartózkodása. Ennek a tételnek a
pszeudokódban való megvalósítása a következő:

    Bemenet: x - T tömb, n - egész, P - logikai
    Kimenet: van - logikai
    függvény Eldöntés(x,n,P)
      i <- 1
      ciklus amíg (i <= n) /\ ~P(x[i])
        i <- i + 1
      ciklus vége
      van <- (i <= n)
      vissza i
    függvény vége

A probléma itt az, hogy sokkal kevésbé magától adódó, hogy a "van" változó
miért is ez alapján kap értéket, mintha a lejjebb olvasható verziót olvasná az
ember:

    Bemenet: T[] x, egész n, logikai P
    Kimenet: logikai van
    függvény Eldöntés(x,n,P)
    {
      van <- hamis
      ciklus i = 0 -> (n-1)
      {
        ha (P(x[i]))
        {
          van <- igaz
          kiugrás
        }
      }
      vissza van
    }

Ebben a formátumban egyértelműen látszik, hogy a "van" csak akkor válik igazzá,
ha találunk egy olyan elemet, amelyre P igaz. Ezen kívül hozzáadott plusz, hogy
az "i" változó ezáltal nem szivárog ki a függvény scopejába, hanem a ciklus
után megszűnik létezni.

Még egy példaként itt a lineáris keresés eredeti implementációja:

    Bemenet: x - T tömb, n - egész, P - logikai
    Kimenet: van - logikai, idx - egész
    függvény LineárisKeresés(x,n,P)
      i <- 1
      ciklus amíg (i <= n) /\ ~P(x[i])
        i <- i + 1
      ciklus vége
      van <- (i <= n)
      ha van akkor
        idx <- i
        vissza (van, idx)
      különben
        vissza van
      elágazás vége
    függvény vége

És a kiugrást alkalmazó változat:

    Bemenet: T[] x, egész n, logikai P
    Kimenet: logikai van, egész idx
    függvény LineárisKeresés(x,n,P)
    {
      ciklus i = 1 -> n
      {
        ha P(x[i])
          vissza (igaz, i)
      }
      vissza hamis
    }

Felmerülhet esetlegesen, hogy a "break" különleges utasítás, amely nem
található meg minden nyelvben, ám ez az aggodalom alaptalan, hisz az
Assembly-tól kezdve a Python-ig minden gyakran használt nyelvben előfordul.

### f. Visszatérés meglévő változóval

Ez csupán egy apró változtatás, de mivel a valódi programozási nyelvek sem
várják el, hogy csak újonnan deklarált változóval térhetünk vissza,
így ez az új Pszeudokódban is eltörlésre kerül.

    i <- 0

    ciklus amíg (i < 10)
        i <- i + 10
    ciklus vége

    idx <- i
    vissza idx

Helyett:

    i = 0

    amíg (i < 10)
    {
        i += 10
    }

    vissza i

## II. Függvények

Önmagukban természetesen a függvények is a szintaxis része, ám mégis
külön szeretném tárgyalni őket, mivel az itt tapasztalt problémáim más
jellegűek.

### a. "Ne ismételd magad" alkalmazása

Az úgy nevezett 'DRY' vagyis "Don't Repeat Yourself" a tiszta kód
egyik alappillére. Röviden összefoglalva annyit jelent, hogy ha egy
kód-részletet többször is fel akarunk használni, akkor érdemes azt
külön függvényként deklarálni és csak újra meghívni. Ezzel csökkentjük
a hibák esélyét és átláthatóbbá tesszük a kódot.

TODO: Találni ide egy jó példát.

### b. Függvény / Eljárás egységesítése

A Pszeudokód különbséget tesz függvények és úgynevezett eljárások
között abban, hogy az előbbi visszatér egy értékkel, míg az utóbbi egy
címszerint átadott változót módosít.

A gyakorlatban ennek a megkülönböztetésnek sok haszna nincs, ezen
kívül a legtöbb nyelv nem is jelöli az ilyesmit. Így az új Pszeudokód
szintén nem tesz különbséget, ehelyett ezt vagy a függvény bemenetei
és kimenetei fogják jelezni.

    Bemenet: x - egész
    Kimenet: x - egész
    eljárás Példa(címszerint x)
        x <- x + 5
    eljárás vége

Helyett:

    Bemenet: x - egész
    Kimenet: x - egész
    függvény Példa(címszerint x)
    {
        x += 5
    }

### c. Bemenetek és Kimenetek stílusának egységesítése

Követve a változók deklarálásának fentebbi változtatásait, a kimenet
és bemenet is hasonlóan megváltozik. A magyarázatokat viszont ugyanúgy
a változó mögé írjuk.

    Bemenet: a - egész, b - T tömb (T rendezhető), c - szöveg
    Kimenet: d - logikai

Helyett:

    Bemenet: egész a, T[] b (T rendezhető), szöveg c
    Kimenet: logikai d

## III. Példák

Végül szeretnék közölni pár tételt, átírva az új szabályokkal, mely
remélhetőleg meggyőzi azokat, akik a fentebbi izolált példákat látva
nem látják ezek hasznát.

### a. Sorozatszámítás

Természetesen első példaképp az programozási tételt vesszük, mely egy
érték kiszámolása egy tömb összes elemének felhasználásával.

Jelen példában "[+]" tetszőleges operátort jelöl, pl. '+', '-' vagy '\*'.

Eredeti tétel:

    Bemenet: x - T tömb, n - egész (tömb mérete)
    Kimenet: érték - T
    függvény Sorozatszámítás(x,n)
        érték <- érték0
        ciklus i <- 1-től n-ig
            érték <- érték [+] x[i]
        ciklus vége
        vissza érték
    függvény vége

A változtatások alkalmazásával:

    Bemenet: T[] x, egész n (tömb mérete)
    Kimenet: T érték
    függvény Sorozatszámítás(x,n)
    {
        T érték

        ciklus i = 1 -> n
        {
            érték [+]= x[i]
        }

        vissza érték
    }

Rövidebben:

    Bemenet: T[] x, egész n (tömb mérete)
    Kimenet: T érték
    függvény Sorozatszámítás(x,n)
    {
        T érték

        ciklus i = 1 -> n
            érték [+]= x[i]

        vissza érték
    }

### b. Lineáris keresés

A következő példa egy fokkal hosszabb és demonstrálja a változtatások
nagy hányadát.

Eredeti tétel:

    Bemenet: x − T tömb, n − egész, P − logikai
    Kimenet: van − logikai, idx − egész
    függvény LineárisKeresés(x,n,P)
        i <- 1
        ciklus amíg (i <= n) /\ ~P(x[i])
            i <- i + 1
        ciklus vége
        van <- (i <= n)
        ha van akkor
            idx <- i
            vissza (van, idx)
        különben
            vissza van
        elágazás vége
    függvény vége

Kiugrás nélkül:

    Bemenet: x − T tömb, n − egész, P − logikai
    Kimenet: van − logikai, i − egész
    függvény LineárisKeresés(x,n,P)
    {
        egész i = 0

        amíg (i < n) /\ ~P(x[i])
        {
            i += 1
        }

        logikai van = (i < n)

        ha van
        {
            vissza (van, i)
        }
        különben
        {
            vissza van
        }
    }

Kiugrással:

    Bemenet: x − T tömb, n − egész, P − logikai
    Kimenet: van − logikai, i − egész
    függvény LineárisKeresés(x,n,P)
    {
        egész i = 0
        logikai van = hamis

        ciklus i = 0 -> n
        {
            ha P(x)
            {
                van = igaz
                kiugrás
            }

            i += 1
        }

        ha van
        {
            vissza (van, i)
        }
        különben
        {
            vissza van
        }
    }

Rövidebben:

    Bemenet: x − T tömb, n − egész, P − logikai
    Kimenet: van − logikai, i − egész
    függvény LineárisKeresés(x,n,P)
    {
        egész i = 0
        logikai van = hamis

        ciklus i = 0 -> n
        {
            ha P(x)
            {
                van = igaz
                kiugrás
            }

            i += 1
        }

        ha van
            vissza (van, i)
        különben
            vissza van

}

### c. C kód összehasonlítása a változtatásokon átesett Pszeudokóddal

Hasonlítsunk össze egy nagyon rövid C nyelven írt kódot, mely
összeadja az első tíz szám közül azokat, melyek párosak, egy
Pszeudokód átirattal.

C:

    int c = 0;

    for (int i = 1; i <= 10; i++)
    {
        if (i % 2 == 0)
            c += i;
    }

Pszeudokód:

    egész c = 0

    ciklus i = 1 -> 10
    {
        ha i páros
            c += i
    }

Ezen változtatások közelebb hozzák a Pszeudokódot egy valódi
programozási nyelvhez, mely által könnyebbé válhat az átültetése,
cserébe nem rugaszkodik el a magas-szintű megközelítéstől, mint
például az egyszerű és intuitív ciklus deklaráció vagy az olyan
irreleváns részletek deklarálásának nélküli használata mint
egy szám párosságát eldöntő függvény.
