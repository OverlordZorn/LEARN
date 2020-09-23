# Einstieg in Python

- [Einstieg in Python](#einstieg-in-python)
  - [1 Einführung](#1-einführung)
    - [1.1 Vorteile von Python](#11-vorteile-von-python)
    - [1.2 Verbreitung von Python](#12-verbreitung-von-python)
    - [1.3 Aufbauch des Buchs](#13-aufbauch-des-buchs)
  - [2 Erste Schritte](#2-erste-schritte)
    - [2.1 Python als Taschenrechner](#21-python-als-taschenrechner)
      - [EVA Prinzip](#eva-prinzip)
      - [Operatoren + - *](#operatoren----)
      - [Operatorenn / // %](#operatorenn---)
      - [Rangfolge und Klammern](#rangfolge-und-klammern)
      - [Variablen und Zuweisung](#variablen-und-zuweisung)
      - [Einige Hinweise](#einige-hinweise)
      - [Variablennamen](#variablennamen)
    - [2.2 Erstes Programm](#22-erstes-programm)
      - [2.2.1 Hallo Welt](#221-hallo-welt)
      - [2.2.2 Eingabe eines Programms](#222-eingabe-eines-programms)
      - [2.2.3 Speicher und Ausführen](#223-speicher-und-ausführen)


## 1 Einführung

### 1.1 Vorteile von Python
Python ist eine sehr einfach zu erlernende Programmiersprache und für den Einstieh in die Welt der Programmierung ideal geeignet. Trotz ihrer Einfachheit bietet diese Sprache auch die Möglichkeit, komplexe Programme für vielfältige Anwendungsgebiete zu schreiben.

Python eignet sich besoders zur schnellen Entwicklung umfangreicher Anwendungen. Diese TEchnik ist unter dem Stichwort RAD ( Rapid Application Development) bekannt geworden. Python vereint zu diesem Zweick folgende Vorteile:
* Eine einfache, eindeutige Syntax: Python ist für Einsteiger eine ideale Programmiersprache. Sie beschränkt sich auf einfache, klare Anweisungen und häufig auf einen einzigen möglichen Lösungsweg. Dieser prägt sich schnell ein und wird dem Entwickler vertraut.
* Klare Strukturen: Python verlangt vom Entwickler, in einer gut lesbaren sStruktur zu schreiben. Die Anordnung der Programmzeilen ergibt zugleich dielogische STruktur des Programms.
* Wiederverwendung von Code: Die Modularisierung, also die Zerlegung eines Problems in Teilprobleme und die anschließende Zusammenführung der Teillösungen zu einer Gesamtlösung, wird in Python sehr leicht gemacht. Die vorhandenen Teillösungen können unkompliziert für weitere Aufgabenstellungen genutzt werden, sodass Sie als Entwickler bald über einen umfangreichen Pool an Modulen verfügen.
* Objektbearbeitung: In Python werden alle Daten als Objekte gespeichert. Dies führt zu einer einheitlichen Behandlung für Objekte unterschiedlichen Typs. Andererseits erfolg die physikalische Speicherung der Objekte von Python automatisch, also ohne Eingriff des Entwicklers. Der Entwickler muss sich nicht um die Reservierung und Freigabe geeigneter Speicherbereiche kümmern.
* Interpreter/Compiler: Python-Programme werden unmittelbar interpretiert. Sie müssen nicht erst kompiliert und gebunden werden. Dies ermöglicht einen häufigen, schnellen Wchsel zwischen Codierungs- und Testpahse.
* Unabhängigkeit vom Betriebssystem: Sowohl Programme, die von der Kommandozeile aus biedient werden, als auch Programme mit grafischen Benutzeroberflächen können auf unterschiedlichen Betriebssystemen (Windows, Linux, macOs) ohne Neuentwicklung und Anpassung eingesetzt werden.

### 1.2 Verbreitung von Python
Aufgrund seiner vielen Vorzüge gehört Python zu den beliebtesten Programmiersprachen überhaupt. So wird es z. B. innerhalb des Projekts 100-Dollar-Laptop, das der Schulausbikldung von Kindern in aller Welt dient, für die Benutzeroverfläche verwendet. Aber auch in zahlreichen großen Unternehmen wird Python eingesetzt, hier ein paar Beispiele.:
* Google: Python ist eine der drei offiziellen Programmiersprachen
* youTube: Wurde zum großen Teil mithilfe von Python entwickelt.
* NASA: Nutzt Python zur Softwareentwicklung im Zusammenhang mit den Spache-Shuttle-Missionen.
* Industrial Light&Magic: Auch HOllywood setzt auf Python - die Produktionsfirma ILM nutzt es z.B. bei der Entwicklung von Spezialeffekten.
* Honeywell: Python wird weltweit in vielen Firmen zur allgemeinen Hardware- und Softwareentwicklung eingesetzt.

### 1.3 Aufbauch des Buchs
Das vorliegende Buch führt Sie in die Programmiersprache Python ein. Besonderer Wert wird darauf gelegt, dass Sie selbst praktisch mit Python aribeten. Daher empfehle ich Ihnen, von Anfang an dem logischen Faden von Erklärungen und Beispielen zu folgen.

Python 3 wurde im Jahr 2008 eingeführt und ist mit der Version 3.8 die aktuelle Version für Einsteiger. Python 2, die klassische Versiuon, existiert noch in großen, langlebigen Projekten und wird auch weiterhin von den Python-Entwickerln unterstützt. Daher gehe ich in einem eigenen Kaptiel auf die Unterschiede zwischen 2 und 3 ein.

Erste Zusammenhänge werden in Kapitel 2 anhand von einfachen Berechnungen vermittelt. Außerdem lernen Sie, ein Programm einzugeben, zu speicher und es unter den verschiedenen Umgebungen auszuführen.

Sie werden die Sprache spielersich kennen lernen. Dhaer begleitet Sie ein selbst programmiertes Spiel durch das Buch. In dem Spiel soll der Benutzer eine oder mehrere Kopfrechenaufgaben lösen. Es wird mit dem "Pgrogrammierkurs" in Kapitel 3 eingeführt und im weitern Verlauf des Buchs kontinuerlich erweitert und verbessert.

Nach der Vorstellung der verschiedenen Datentypen mit ihren jeweiligen Eigenschaften und Vorteilen in Kapitel 4 werden die Programmierkenntnisse in Kapitel 5 vertieft.

Kapitel 6 widmet sich der objektorientierten Programmierung mit Python.

Einige nützliche Module zur Ergänzung der Programme werden in Kapitel 7 vorgestellt.

In Kapitel 8 und 10 lernen Sie, Daten dauerhaft in Dateien oder Datenbanken zu speichern. Python wird zudem in der Internetprogrammierung eingesetzt. Die Zusammenhänge zwischen Python und dem internet vermittelt Kapitel 9.

Sowohl Windows als auch Ubuntu Linux und macOS bieten komfortable grafische Benutzeroberflächen (GUI). Kapitel 11 beschäftigt sich mit der GUI Erzeugung mithilfe des Moduls tkinter. Dieses stellt eine Schnittstelle zwischen dem grafischen Tooklit Kk und Python dar.

Kapitel 12 fasst diejenigen Unterschiede zwischen Python 2 und Python 3, die besonders für Einsteiger interessant sind, noch einmal zusammen.

Python ist die primäre Sprache für die Programmierung von elektronischen Schaltungen mithilfe des Einplatinencomputers RasPi. In Kaptiel 13 werden wir uns damit beschäftigen.

## 2 Erste Schritte
### 2.1 Python als Taschenrechner
#### EVA Prinzip
Eingabe, Verarbeitung, Ausgabe.

#### Operatoren + - *

```
>>> 41 + 7.5
48.5

>>> 12 - 18
-6 

>>> 7 * 3
21
```

#### Operatorenn / // % 

```
>>> 22 / 8
2.75

>>> 22 // 8
2

>>> 22 % 8
6
```

#### Rangfolge und Klammern

```
>>> 7 + 2 * 3
13

>>> (7 + 2) * 3
27
```

#### Variablen und Zuweisung
```
>>> mi = 1.609344
>>> 2 * mi
3.218688
>>> 5 * mi
8.04672
>>> 22.5 * mi
36.21024
>>> 2.35 * mi
3.7819584000000006
```

#### Einige Hinweise

In Python-Variablen können sie ganze Zahlen, Zahlen mit Nachkommastellen, Zeichenketten (also Texte) und andere Objekte eines Programms mithilfe von Zuweisungen speichern.

Das Ergebnis der letzten Berechnung ist mathematisch falsch. 2,35 Meilen entsprechen 3,7819583 Kilometern, also ohne eine weiter 6 an der 16. Nachkommastelle. Woher kommt die falsche Anzeige?

Zahlen mit Nachkommastellen können im Gegensatz zu ganzen Zahlen nicht mathematisch exakt gespeichert werden. Es gibt einige Stellen im Buch, an denen dies auffallen wird. Bei den meisten Bereichnungen ist allerdings die Abweichung so gering, dass sie in der Praxis zu nvernachlässigen ist.

Es ist überlich, den Wert in Kilometer so auszugeben, dass dass auf drei Stellen hinter dem Komma gerunden wird, also auf den Meter genau. Auf eine solche formatierte Ausgabe gehen wir später noch ein.

#### Variablennamen
Den Namen einer Variablen können Sie unter Einhaltung der folgenden Regeln weitgehend frei wählen:
* Er kann aus den Buchstaben a-z, A-Z, 0-9 oder _ bestehen.
* Er darf nicht mit einer Ziffer beginnen.
* Er darf keinem der reservierten Wörter der Programmiersprache Python entsprechen. Das sind: `and, as, assert, break, class, continue, def, del, elif, else, except, exec, finally, for, from, global, if, import, in, is, lambda, not, or, pass, rpint, raise, return, try, while, with, yield.
* Bachten Sie die Groß- und KLeinschreibung: Namen und Anweisungen müssen genau wie vorgegeben geschrieben werden. Die Namen `mi` und `Mi` bezeichnen verschiedene variablen.


### 2.2 Erstes Programm

Ein erstes Python-Programm wird eingegeben, abgespeichert und aufgerufen. Dieser Vorgang wird ausführlich erklärt. Die einzelnen Schritte sind später bei jedem Python-Programm auszuführen.


#### 2.2.1 Hallo Welt


#### 2.2.2 Eingabe eines Programms

Zur Eingabe des Programms rufen Sie in der Entwicklungsumgebung IDLE im Menü File zunächst den Menübefehl New File auf. Es öffnet sich ein neues Fenster mit dem Titel Untitled. ADas Hauptfenster rückt in den Hintergrund.

```py
print("Hallo Welt")
```

#### 2.2.3 Speicher und Ausführen

