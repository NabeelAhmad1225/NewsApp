import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  articles =[
    {
        "source": {
            "id": null,
            "name": "New York Times"
        },
        "author": "Scott Cacciola",
        "title": "Boston Marathon: Natasha Wodak and Malindi Elmore Make Their Debuts",
        "description": "After taking breaks from the sport, Natasha Wodak, 40, and Malindi Elmore, 42, expect to be in the mix among the elites at the Boston Marathon.",
        "url": "https://www.nytimes.com/2022/04/17/sports/boston-marathon-natasha-wodak-malindi-elmore.html",
        "urlToImage": "https://static01.nyt.com/images/2022/04/17/sports/17boston-preview/merlin_205440522_1c7cfe95-29f8-426f-b96b-2f26ed1c71ae-facebookJumbo.jpg",
        "publishedAt": "2022-04-17T10:00:07Z",
        "content": "I really threw myself full throttle back into running when I was going through that time in my life, she recalled.\r\nBy 2010, Wodak had shown enough promise to make her first national team, joining a … [+1751 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": null,
        "title": "UFC 273: Five things we learned as Alexander Volkanovski dominates 'Korean Zombie'",
        "description": "BBC Sport looks at the big talking points from UFC 273 as Alexander Volkanovski beats the 'Korean Zombie' Chan Sung Jung to retain his featherweight title.",
        "url": "https://www.bbc.co.uk/sport/mixed-martial-arts/61057214",
        "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/B536/production/_124109364_gettyimages-1390585815.jpg",
        "publishedAt": "2022-04-10T12:44:15Z",
        "content": "Volkanovski earned a performance-of-the-night bonus for his win over Chan Sung Jung\r\nAlexander Volkanovski cemented his status as the world's best featherweight with a flawless victory over the 'Kore… [+4715 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": null,
        "title": "Kinahan Cartel: Sport warned about involvement with Irish organised crime group following sanctions",
        "description": "The world of sport is warned about involvement with the Irish Kinahan organised crime group, who have been hit with worldwide financial sanctions.",
        "url": "https://www.bbc.co.uk/sport/boxing/61082439",
        "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/F4A6/production/_117003626_danielkinahaninhatandfreddiethompsonatdavidbyrnefuneraldublin2016collinsphotographicagencyfeepaid6890326417copy.jpg",
        "publishedAt": "2022-04-12T16:53:49Z",
        "content": "Daniel Kinahan, originally from Ireland, moved to Dubai in 2016\r\nThe world of sport has been warned over its involvement with the Kinahan organised crime group, which has been hit with worldwide fina… [+3994 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "New York Times"
        },
        "author": "Leah Askarinam",
        "title": "Foxes and D.C. Politicians Don’t Mix, As This Week and History Show",
        "description": "The nation’s founding fathers hunted foxes for sport. This week, a rabid fox that bit nine people near the U.S. Capitol led to a very different type of hunt.",
        "url": "https://www.nytimes.com/2022/04/08/us/politics/capitol-hill-fox-history.html",
        "urlToImage": "https://static01.nyt.com/images/2022/04/06/us/politics/-06onpolitics-pm-newsletter-fox/-06onpolitics-pm-newsletter-fox-facebookJumbo-v2.jpg",
        "publishedAt": "2022-04-08T23:00:04Z",
        "content": "George Washington himself was an avid fox hunter and even bred his own fox hounds. Today, Washington, the father of our country, is also known as the father of the American foxhound.\r\nWashington was … [+1454 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": null,
        "title": "Tyson Fury v Dillian Whyte: How 'throwback fighter' Whyte became a world title contender",
        "description": "BBC Sport looks at the rise of Dillian Whyte as he prepares to challenge for a world title against WBC champion Tyson Fury at Wembley Stadium.",
        "url": "https://www.bbc.co.uk/sport/boxing/61119306",
        "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/99A0/production/_124182393_gettyimages-1163234431.jpg",
        "publishedAt": "2022-04-19T08:22:50Z",
        "content": "Don't treat me like a nobody - Whyte\r\n<table><tr><th>Tyson Fury v Dillian Whyte - WBC heavyweight title</th></tr>\r\n<tr><td>Venue: Wembley Stadium, London Date: Saturday, 23 April</td></tr><tr><td>Cov… [+5994 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": null,
        "title": "Scottie beamed, Rory roared, Tiger back - Masters review",
        "description": "BBC Sport golf correspondent Iain Carter looks back at the 86th Masters at Augusta when Scottie beamed, Rory roared and we could marvel at another extraordinary Tiger feat.",
        "url": "https://www.bbc.co.uk/sport/golf/61067399",
        "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/E35A/production/_124120285_hi075238742.jpg",
        "publishedAt": "2022-04-11T14:01:24Z",
        "content": "Rarely can such a one-sided tournament have thrilled like the 86th Masters did at Augusta last week - Scottie beamed, Rory roared and we could marvel at another extraordinary Tiger feat.\r\nThere shoul… [+6115 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": null,
        "title": "Real Madrid v Chelsea: How Karim Benzema has become one of world's top strikers",
        "description": "BBC Sport looks at Karim Benzema's prolific form for Real Madrid and how he has emerged as one of Europe's top strikers.",
        "url": "https://www.bbc.co.uk/sport/football/61069998",
        "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/AD72/production/_124120444_-d8b52c79-8979-40ec-b7f2-92ff0c772ad9.png",
        "publishedAt": "2022-04-12T05:52:36Z",
        "content": "Karim Benzema has averaged 30 goals per season in all competitions since Cristiano Ronaldo left Real Madrid in 2018, compared with 20 per season prior to the Portugal captain's departure\r\n\"When you p… [+6522 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "New York Times"
        },
        "author": "Matthew Futterman",
        "title": "In Tennis, Racket Smashing Gets Out of Hand",
        "description": "Long accepted as an entertaining idiosyncrasy of the sport, the act of hurling one’s racket has led to some close calls, as ball people and chair umpires dodge injury.",
        "url": "https://www.nytimes.com/2022/03/30/sports/tennis/racket-smash.html",
        "urlToImage": "https://static01.nyt.com/images/2022/03/30/multimedia/30tennis-smash6/30tennis-smash6-facebookJumbo-v2.jpg",
        "publishedAt": "2022-03-30T15:24:54Z",
        "content": "Like most people in tennis, McEnroe was stunned when the ATP recently handed down a suspended eight-week ban to Alexander Zverev, who repeatedly beat on the umpires chair at the end of a doubles matc… [+1592 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Android Central"
        },
        "author": "christinep2424@gmail.com (Christine Persaud)",
        "title": "Garmin Vivomove Sport vs. Vivomove Style",
        "description": "Both the Vivomove Sport and Vivmove Style, two of Garmin's newest smartwatches, offer similar looks and features, making it a tough decision between the two.",
        "url": "https://www.androidcentral.com/wearables/garmin-vivomove-sport-vs-vivomove-style",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/eP6PmvSprXFDPxVcTb8mJi-1200-80.jpg",
        "publishedAt": "2022-03-29T11:30:21Z",
        "content": "When it comes to smartwatches and fitness trackers, Garmin is among the best brands you can buy. And two of its newest devices, the Garmin Vivomove Sport and Vivomove Style, boast some compelling fea… [+10414 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Lifehacker.com"
        },
        "author": "Jake Peterson",
        "title": "18 of the Best Ways to Customize Your Gmail Inbox",
        "description": "Gmail is simple, friendly, and easy to use. You likely set it up once, and have been using it the same way ever since. And why not? You send and receive email without issue, so what’s to change? Well, it turns out, quite a bit. Read more...",
        "url": "https://lifehacker.com/18-of-the-best-ways-to-customize-your-gmail-inbox-1848782200",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/efe26b1f7bd119399426b8cbb391630d.jpg",
        "publishedAt": "2022-04-13T13:00:00Z",
        "content": "Email signatures are a classic piece of the old internet. While modern signatures are professional and to the point, some still sport colorful, loud text, with inspirational quotes galore. If you can… [+661 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": null,
        "title": "Ashleigh Barty to play in golf exhibition series",
        "description": "Former tennis world number one Ashleigh Barty fuels suggestions she may attempt a top-level career in a third sport after signing up to compete in a golf exhibition.",
        "url": "https://www.bbc.co.uk/sport/tennis/61147275",
        "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/EC36/production/_124207406_barty_getty.jpg",
        "publishedAt": "2022-04-19T07:32:27Z",
        "content": "Barty held tennis' world number one ranking for more than two years in total\r\nFormer world number one Ashleigh Barty has fuelled speculation she may attempt a top-level careerexternal-link\r\nin a thir… [+1319 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Guardian"
        },
        "author": "Sean Ingle",
        "title": "Transgender cyclist Emily Bridges set for lottery funding if allowed to compete",
        "description": "<ul><li>UK Sport says it is up to individual sports to decide eligibility</li><li>Chief executive praises ‘incredible resilience’ of cyclist</li></ul>UK Sport says it will support transgender cyclist Emily Bridges with lottery funding in the build up to the P…",
        "url": "https://amp.theguardian.com/sport/2022/apr/07/transgender-cyclist-emily-bridges-in-line-for-lottery-funding-if-allowed-to-compete",
        "urlToImage": "https://i.guim.co.uk/img/media/332590e057078f32f250e4c5765d10bea2a48fcd/62_413_1038_623/master/1038.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f187ac31adfbb96f31293f8986ef5c0e",
        "publishedAt": "2022-04-07T13:00:03Z",
        "content": "UK Sport says it will support transgender cyclist Emily Bridges with lottery funding in the build up to the Paris 2024 Olympics if she is allowed to compete in the womens category.\r\nThe confirmation … [+3299 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": null,
        "title": "Japan's double Olympic champion Takagi retires - Reuters.com",
        "description": "Japan's double Olympic speed skating champion Nana Takagi announced her retirement from the sport on Tuesday.",
        "url": "https://www.reuters.com/lifestyle/sports/japans-double-olympic-champion-takagi-retires-2022-04-05/",
        "urlToImage": "https://www.reuters.com/resizer/bC2GHTDslLAikPy9rINUC8Rs86Q=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FFVUH2PSC5LP3P7ZC2SQXLOYH4.jpg",
        "publishedAt": "2022-04-05T05:22:00Z",
        "content": "April 5 (Reuters) - Japan's double Olympic speed skating champion Nana Takagi announced her retirement from the sport on Tuesday.\r\nThe 29-year-old won gold in the inaugural women's mass start competi… [+925 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "MacRumors"
        },
        "author": "Mitchel Broussard",
        "title": "Deals: New Record Low Prices Hit Apple Watch Series 7, Starting at $329.99",
        "description": "Amazon today has introduced a new batch of all-time low prices on the Apple Watch Series 7, starting as low as $329.99 for the 41mm GPS models. These sales reach up to $69 off, and in every model listed below you'll find record low discounts. Below we focus o…",
        "url": "https://www.macrumors.com/2022/04/04/deals-take-69-off-apple-watch/",
        "urlToImage": "https://images.macrumors.com/t/Na1KT6ZUZ402z20lx-3rQR8aoh0=/1600x/article-new/2022/01/Apple-Watch-Series-7-Rainbow-Cropped-Blue-Discount.jpg",
        "publishedAt": "2022-04-04T13:12:55Z",
        "content": "Amazon today has introduced a new batch of all-time low prices on the Apple Watch Series 7, starting as low as $329.99 for the 41mm GPS models. These sales reach up to $69 off, and in every model lis… [+1555 chars]"
    },
    {
        "source": {
            "id": "wired",
            "name": "Wired"
        },
        "author": "Jeremy White",
        "title": "Omega and Swatch’s $260 MoonSwatch Looks Out of This World",
        "description": "You read that right, $260. Plus this playful take on the iconic Speedmaster comes in multiple colors and is made from the group’s Bioceramic material.",
        "url": "https://www.wired.com/story/omega-and-swatch-moonswatch/",
        "urlToImage": "https://media.wired.com/photos/623cbde1d623d151b907c654/191:100/w_1280,c_limit/sc01_22_BIOCERAMIC_MoonSwatch_MOON_face_Print-gear.jpg",
        "publishedAt": "2022-03-24T18:55:47Z",
        "content": "Omega and Swatch have announced a budget version of the iconic Speedster Moonwatch, an astronaut-inspired piece that usually retails for thousands of dollars. The MoonSwatch is the first collaboratio… [+2553 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": null,
        "title": "Kazakh weightlifter Rahimov banned for eight years, stripped of Rio gold - Reuters.com",
        "description": "Kazakh weightlifter Nijat Rahimov, who won gold in the 77kg at the 2016 Rio Olympics, has been banned from the sport for eight years for a doping offence and will be stripped of his medal, the Court of Arbitration for Sport (CAS) said on Tuesday.",
        "url": "https://www.reuters.com/lifestyle/sports/kazakh-weightlifter-rahimov-banned-eight-years-stripped-rio-gold-2022-03-22/",
        "urlToImage": "https://www.reuters.com/resizer/-Y87kh4ObvhenoOvLLwg-L-ir1A=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4YG7NUJVLNKRLA534AMOLAMWYA.jpg",
        "publishedAt": "2022-03-22T16:37:00Z",
        "content": "March 22 (Reuters) - Kazakh weightlifter Nijat Rahimov, who won gold in the 77kg at the 2016 Rio Olympics, has been banned from the sport for eight years for a doping offence and will be stripped of … [+1312 chars]"
    },
    {
        "source": {
            "id": "engadget",
            "name": "Engadget"
        },
        "author": "Andrew Tarantola",
        "title": "Atari collaborates with Cariuma to create a 50th anniversary sneaker collection",
        "description": "Atari is celebrating its 50th anniversary with some smoking new kicks. The venerated gaming company announced on Thursday that it is collaborating with sustainable footwear maker, Cariuma. The collection will feature five designs atop two of Cariuma's most po…",
        "url": "https://www.engadget.com/atari-teams-with-cariuma-to-create-a-50th-anniversary-sneaker-collection-172322667.html",
        "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-03/74050bc0-ab94-11ec-bffe-b0055b960d52",
        "publishedAt": "2022-03-24T17:23:22Z",
        "content": "Atari is celebrating its 50th anniversary with some smoking new kicks. The venerated gaming company announced on Thursday that it is collaborating with sustainable footwear maker, Cariuma. The collec… [+1063 chars]"
    },
    {
        "source": {
            "id": "engadget",
            "name": "Engadget"
        },
        "author": "Andrew Tarantola",
        "title": "Kia's 2023 Niro SUV comes in all the EV flavors",
        "description": "The Kia Niro has long been a staff-favorite here at Engadget. On Wednesday, the Korean automaker took to the NYIAS 2022 stage to show off its latest iterations of the popular compact sport utility, one for every kind of driver. \r\nHyundai Motor Group\r\nThe seco…",
        "url": "https://www.engadget.com/kias-2023-niro-suv-comes-in-all-the-ev-flavors-141024897.html",
        "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-04/117f98a0-bb2d-11ec-bf7d-bb769bce4952",
        "publishedAt": "2022-04-13T14:10:24Z",
        "content": "The Kia Niro has long been a staff-favorite here at Engadget. On Wednesday, the Korean automaker took to the NYIAS 2022 stage to show off its latest iterations of the popular compact sport utility, o… [+2504 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "New York Times"
        },
        "author": "Gerald Flores",
        "title": "Golf Shoes Are Getting a Makeover Thanks to Streetwear and Sneaker Culture",
        "description": "If you’ve seen golf shoes on the street, it is because one of the world’s most conservative sports has been getting a fresh look thanks to streetwear and sneaker culture.",
        "url": "https://www.nytimes.com/2022/04/08/sports/golf/sneakers-streetwear.html",
        "urlToImage": "https://static01.nyt.com/images/2022/04/10/sports/10masters-sneakers-1/merlin_205040073_61cb1c2c-c550-4f1f-9351-58b65010fa80-facebookJumbo.jpg",
        "publishedAt": "2022-04-08T21:28:30Z",
        "content": "Many people bought golf sets at entry-level prices in 2020, he said, an indication that newcomers were picking up the sport. Any of the beginners who are buying $400 golf sets are not going to drop $… [+1687 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": null,
        "title": "World Snooker Championship 2022: Ronnie O'Sullivan referred over lewd gesture",
        "description": "World number one Ronnie O'Sullivan has been referred to the WPBSA disciplinary committee for appearing to make a lewd gesture at the World Championship.",
        "url": "https://www.bbc.co.uk/sport/snooker/61144438",
        "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/0F50/production/_124202930_ronnie-index.jpg",
        "publishedAt": "2022-04-18T20:01:17Z",
        "content": "Ronnie O'Sullivan is appearing at the Crucible for a record-equalling 30th time\r\n<table><tr><th>2022 Betfred World Championship</th></tr>\r\n<tr><td>Venue: Crucible Theatre, Sheffield Dates: 16 April-2… [+978 chars]"
    }
]
  constructor () {
    super ();
    console.log("Hello i m a constructor");
    this.state = {
      articles : this.articles,
      loading : false,
      page : 1
    }
  }
  async componentDidMount () {
    let url = "https://newsapi.org/v2/everything?q=apple&from=2022-04-18&to=2022-04-18&sortBy=popularity&apiKey=aeebed0b3fc541ae9cf09065add756ee&page=1";
    let data = await fetch (url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles});
  }
  handleNexrClick = async () => {
    console.log("Next");
    let url = `https://newsapi.org/v2/everything?q=apple&from=2022-04-18&to=2022-04-18&sortBy=popularity&apiKey=aeebed0b3fc541ae9cf09065add756ee&page=${this.state.page + 1}`;
    let data = await fetch (url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles : parsedData.articles

    })


  }
  handlePreviousClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/everything?q=apple&from=2022-04-18&to=2022-04-18&sortBy=popularity&apiKey=aeebed0b3fc541ae9cf09065add756ee&page=${this.state.page - 1}`;
    let data = await fetch (url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles : parsedData.articles

    })
  }
  render() {
    return (
      <div className="container my-3">
        <h1>Daily Prime News - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((e) => {

         return <div className="col-md-4" key={e.url}>
            <NewsItems title={e.title.slice(0,45)} description={e.description.slice(0,88)} imgUrl={e.urlToImage} newsUrl={e.url}/>
          </div>
           
        })}

        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-sm btn-danger" onClick={this.handlePreviousClick}>&laquo; Previous</button>
        <button type="button" class="btn btn-light">Page {this.state.page}</button>

        <button type="button" className="btn btn-sm btn-danger" onClick={this.handleNexrClick}>Next &raquo;</button>

        </div>
      </div>
    );
  }
}
