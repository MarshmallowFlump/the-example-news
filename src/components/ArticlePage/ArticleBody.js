import React from 'react';
import ArticleVoteBlock from './ArticleVoteBlock';

const ArticleBody = () => {
    return (
        <div className='articleBody'>
            <h1 className='articleTitle'>
                Title of Post Goes Here
            </h1>

            <h1 className='articleUsername'>
                Username
            </h1>

            <h1 className='articleDate'>
                1 January 2022
            </h1>

            <body className='articleBodyText'>
                Cupcake ipsum dolor sit amet wafer gummi bears dessert jujubes. Jelly beans halvah muffin cupcake gummi bears pie chupa chups chocolate cake donut. Bonbon tart toffee chocolate sweet roll candy canes. Danish pastry gummi bears cotton candy gummi bears halvah carrot cake gingerbread.

                Apple pie cotton candy soufflé marzipan toffee. Wafer biscuit marshmallow cookie gummies macaroon macaroon. Gummies cookie chocolate cake toffee biscuit tootsie roll brownie.

                Sweet bear claw sesame snaps muffin bear claw powder chocolate cake candy. Carrot cake dragée donut carrot cake topping jelly-o cupcake carrot cake. Fruitcake chupa chups lollipop bear claw brownie lemon drops sesame snaps pie.

                Shortbread bear claw tart chocolate cupcake ice cream tootsie roll cheesecake. Brownie pastry brownie topping gingerbread chupa chups cake pudding candy canes. Tiramisu pastry biscuit marzipan shortbread donut.

                Jelly icing dessert powder dessert gummi bears oat cake. Jelly jelly marzipan cupcake wafer chupa chups caramels candy canes. Candy marshmallow gummi bears candy dessert cotton candy tart marshmallow. Chocolate cake ice cream jelly-o topping chocolate bar carrot cake.
            </body>
        <ArticleVoteBlock />
        </div>
    );
};

export default ArticleBody;