const tweets_container = document.getElementById("tweets_container");
const dummyTweets = [
	{
		userImage:
			'https://pbs.twimg.com/profile_images/595659104384905218/bOtXKmdP_bigger.jpg',
		userName: 'username',
		userScreen: '@username',
		created: Date.now(),
		text: 'Oooopsie!'
	},
	{
		userImage:
			'https://pbs.twimg.com/profile_images/595659104384905218/bOtXKmdP_bigger.jpg',
		userName: 'username',
		userScreen: '@username',
		created: Date.now() - 50000,
		text: 'Twitter API limit reached. 😭'
	},
	{
		userImage:
			'https://pbs.twimg.com/profile_images/595659104384905218/bOtXKmdP_bigger.jpg',
		userName: 'username',
		userScreen: '@username',
		created: Date.now() - 150000,
		text: 'Now all you can see are these dummy tweets... 😞'
	},
	{
		userImage:
			'https://pbs.twimg.com/profile_images/595659104384905218/bOtXKmdP_bigger.jpg',
		userName: 'username',
		userScreen: '@username',
		created: Date.now() - 300000,
		text: 'But, you can come back later to see the real deal!'
	},
];
const tweets = [];

const getTweets = async () => {
  try {
    const response = await fetch("https://twitter-100-days-100-projects.glitch.me/feed");
    const res = await response.json();

    if (res.error) {
      clearInterval(updateTweetsInterval);
      tweets_container.innerHTML = "";
      dummyTweets.sort(() => -1).forEach(tweet => createTweet(tweet));
    } else {
      res.sort(() => -1).forEach(tweet => createTweet(tweet));
    }
  } catch (error) {
    console.error("Error fetching tweets", error);
  }
};

const createTweet = (tweet) => {
  if (!tweets.find(tw => tw.text === tweet.text)) {
    const tweetElement = document.createElement("li");
    tweetElement.classList.add("tweet");
    const tweetInnerHTML = `
        <div class="tw-left">
            <img src="${tweet.userImage}" alt="img" />
        </div>
        <div class="tw-right">
            <h4 class="name">
                ${tweet.userName}
                <span class="handle">${tweet.userScreen} ·</span>
                <span class="time" date-time="${tweet.created}">${moment(tweet.created).fromNow()}</span>
                <p class="text">${tweet.text.replace(/\n/g, "<br/>")}</p>
            </h4>
        </div>
    `;
    tweetElement.innerHTML = tweetInnerHTML;
    tweets_container.prepend(tweetElement);

    tweets.push(tweet);
  }
};

const updateTime = () => {
  const tweetsTimes = document.querySelectorAll(".time");
  tweetsTimes.forEach(tweetElement => {
    tweetElement.innerHTML = moment(tweetElement.getAttribute('date-time')).fromNow();
  });
};

function updateTweets() {
  updateTime();
  getTweets();
}

getTweets();
const updateTweetsInterval = setInterval(updateTweets, 5000);