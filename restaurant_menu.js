intents.matches('restaurant.menus', '/restaurant.menus');

bot.dialog('/', intents);

// Handle the 'restaurant.menus' intent
bot.dialog('/restaurant.menus', [
    function(session, args, next) {
        var cards = [];

        menus.forEach(function(menu) {
            var card = new builder.HeroCard(session)
                .title(menu.name)
                .subtitle(menu.subtitle)
                .text(menu.text)
                .images([
                    builder.CardImage.create(session, menu.image)
                ])
                .buttons([
                    builder.CardAction.openUrl(session, menu.url, 'Order Now')
                ]);

            cards.push(card);
        })

        var reply = new builder.Message(session)
            .attachmentLayout(builder.AttachmentLayout.carousel)
            .attachments(cards);

        session.endDialog(reply);
    }
]);

// bot.dialog('/restaurant.menus', [
//     // Code goes here
//     function(session, args, next) {
//         var cards = [];
//          menus.forEach(function(menu) {
//             var card = new builder.HeroCard(session)
//                 .title(menu.name)
//                 .subtitle(menu.subtitle)
//                 .text(menu.text)
//                 .images([
//                     builder.CardImage.create(session, menu.image)
//                 ])
//                 .buttons([
//                     builder.CardAction.openUrl(session, menu.url, 'Order Now')
//                 ]);
//              cards.push(card);
//         })
//          var reply = new builder.Message(session)
//             .attachmentLayout(builder.AttachmentLayout.carousel)
//             .attachments(cards);
//          session.endDialog(reply);
//     }
