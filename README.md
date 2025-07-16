# IdoMods Project


## Spis treści

- [Uruchomienie projektu](#uruchomienie-projektu)
  - [Wymagania](#wymagania)
  - [Instalacja](#instalacja)
- [Użycie](#użycie)
  - [Dostępne skrypty](#dostępne-skrypty)
- [Użyte technologie](#użyte-technologie)

---

## Uruchomienie projektu

Poniżej znajdują się instrukcje, które pozwolą Ci na uruchomienie projektu lokalnie na Twoim komputerze w celach deweloperskich.

### Wymagania

Upewnij się, że masz zainstalowane poniższe narzędzia:

- [Node.js](https://nodejs.org/en/) (w wersji 16.x lub nowszej)
- npm (zazwyczaj instaluje się razem z Node.js)

### Instalacja

1.  Sklonuj repozytorium na swój dysk:
    ```sh
    git clone [https://github.com/adrian-gabor/brandsmanago.git](https://github.com/adrian-gabor/brandsmanago.git)
    ```
2.  Przejdź do folderu z projektem:
    ```sh
    cd brandsmanago
    ```
3.  Zainstaluj wszystkie zależności:
    ```sh
    npm install
    ```

---

## Użycie

Po poprawnej instalacji możesz korzystać z poniższych skryptów.

### Dostępne skrypty

W folderze projektu możesz uruchomić następujące komendy:

- **`npm start`**
  Uruchamia aplikację w trybie deweloperskim z wykorzystaniem serwera Parcel.
  Otwórz [http://localhost:1234](http://localhost:1234), aby zobaczyć projekt w przeglądarce. Strona będzie automatycznie przeładowywać się po każdej zmianie w kodzie.

- **`npm run build`**
  Buduje aplikację do statycznych plików gotowych do umieszczenia na serwerze produkcyjnym. Zoptymalizowane pliki zostaną umieszczone w folderze `dist/`.

---

## Użyte technologie

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Parcel**

---
