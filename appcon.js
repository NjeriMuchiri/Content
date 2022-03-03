const text = [
    `Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate, and that share features with other desserts such as pastries, meringues, custards, and pies.`,
    `The most commonly used cake ingredients include flour, sugar, eggs, butter or oil or margarine, a liquid, and a leavening agent, such as baking soda or baking powder. Common additional ingredients and flavourings include dried, candied, or fresh fruit, nuts, cocoa, and extracts such as vanilla, with numerous substitutions for the primary ingredients. Cakes can also be filled with fruit preserves, nuts or dessert sauces (like pastry cream), iced with buttercream or other icings, and decorated with marzipan, piped borders, or candied fruit.`,
    `Cake is often served as a celebratory dish on ceremonial occasions, such as weddings, anniversaries, and birthdays. There are countless cake recipes; some are bread-like, some are rich and elaborate, and many are centuries old. Cake making is no longer a complicated procedure; while at one time considerable labor went into cake making (particularly the whisking of egg foams), baking equipment and directions have been simplified so that even the most amateur of cooks may bake a cake.`,
    `The term "cake" has a long history. The word itself is of Viking origin, from the Old Norse word "kaka".`,
    `The ancient Greeks called cake πλακοῦς (plakous), which was derived from the word for "flat", πλακόεις (plakoeis). It was baked using flour mixed with eggs, milk, nuts, and honey. They also had a cake called "satura", which was a flat heavy cake. During the Roman period, the name for cake became "placenta" which was derived from the Greek term. A placenta was baked on a pastry base or inside a pastry case.`,
    `The Greeks invented beer as a leavener, frying fritters in olive oil, and cheesecakes using goat's milk.In ancient Rome, the basic bread dough was sometimes enriched with butter, eggs, and honey, which produced a sweet and cake-like baked good.Latin poet Ovid refers to his and his brother's birthday party and cake in his first book of exile, Tristia.`,
    `Early cakes in England were also essentially bread: the most obvious differences between a "cake" and "bread" were the round, flat shape of the cakes, and the cooking method, which turned cakes over once while cooking, while bread was left upright throughout the baking process.`,
    `The earliest known recipe for sponge cake (or biscuit bread) from Gervase Markham's The English Huswife (1615) is prepared by mixing flour and sugar into eggs, then seasoning with anise and coriander seeds. Nineteenth century descriptions of "avral bread" (funeral biscuits) vary from place to place but it sometimes described as "sponge biscuits" or a "crisp sponge" with a light dusting of sugar ". Traditional American sponge recipes diverged from earlier methods of preparation, adding ingredients like vinegar, baking powder, hot water or milk. The basic recipe is also used for madeleines, ladyfingers, and trifles, as well as some versions of strawberry shortcake`,
    `Although sponge cake is usually made without butter, its flavor is often enhanced with buttercream, pastry cream or other types of fillings and frostings. Sponge soaks up flavors from fresh fruits, fillings and custard sauces.Sponge cake covered in boiled icing was very popular in American cuisine during the 1920s and 1930s. The delicate texture of sponge and angel food cakes, and the difficulty of their preparation, meant these cakes were more expensive than daily staple pies. The historic Frances Virginia Tea Room in Atlanta served sponge cake with lemon filling and boiled icing. New York City's Crumperie served not only crumpets but toasted sponge cake as well.[10][7]`
];


const form = document.querySelector('.lorem');
const amount = document.getElementById('amount');
const result = document.querySelector('.lorem-text');

form.addEventListener('submit', function (e){
    e.preventDefault();
    const value = parseInt(amount.value);

    // empty
    // -1
    //  > 9
    if(isNaN(value) || value < 0 || value > 9){
        result.innerHTML = `<p class="result">${text[0]}</P>`
    }
});