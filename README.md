# 🍳 Simulation d'une recette d'Omelette - Projet JS

Une mini-simulation écrite en **JavaScript orienté objet**, dans laquelle un personnage va faire les courses, acheter des ingrédients, préparer une omelette et la cuire. Le tout dans un scénario amusant et pédagogique.

---

## 🎮 Fonctionnalités

- Création de classes orientées objets :
  - `Personnage`, `Lieu`, `Ingredient`, `Outil`, `Panier`, `Bol`
- Déplacements entre lieux (maison, épicerie)
- Gestion de l’inventaire avec les paniers
- Interaction avec des objets : couper, mélanger, cuire
- Utilisation de `setTimeout` pour simuler la cuisson
- Mise en pratique de la POO, gestion des objets et tableaux

---

## ⚙️ Technologies

- JavaScript (ES6+)
- Paradigme orienté objet
- Console du navigateur

---

## 📜 Scénario

1. Le personnage (Ibrahim) part de la maison pour aller à l'épicerie.
2. Il prend un panier et y place des ingrédients (œuf, oignon, épices, fromage).
3. Il paye les articles et retourne à la maison.
4. Il verse les ingrédients dans un bol.
5. Il coupe les ingrédients entiers, mélange le tout.
6. Il verse le mélange dans une poêle et le fait cuire.
7. 🍳 L’omelette est prête !

---

## 💡 Exemple d’extrait de code

```js
bol.melanger("omelette")
poele.contenu.push(bol.contenu)
poele.cuire();
