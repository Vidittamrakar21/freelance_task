import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  blogs: [{
    "id": 1,
    "title": "Amazon’s Shipping and Delivery Emissions Just Keep Going Up",
    "url": "https://media.wired.com/photos/66e0c141f49b1737ec7407ff/master/w_1920,c_limit/Science_Amazon_Emissions_GettyImages-1469757888.jpg",
    "btype": "lifestyle",
    "bdata": "<p><strong>Five years ago,</strong>&nbsp;in a splashy speech in Washington, DC, Jeff Bezos&nbsp;<a href=\"https://www.wired.com/story/amazon-climate-pledge-employee-walkout/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(26, 26, 26); background-color: transparent;\">rolled out</a>&nbsp;Amazon’s Climate Pledge, a series of commitments to show that the company was serious about addressing climate change.</p><p>A core component of that pledge, one that Bezos&nbsp;<a href=\"https://www.aboutamazon.com/news/policy-news-views/statement-by-jeff-bezos-to-the-u-s-house-committee-on-the-judiciary?ots=1&amp;tag=w050b-20&amp;linkCode=w50\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(26, 26, 26); background-color: transparent;\">touted in front of members of Congress</a>&nbsp;during Amazon’s antitrust hearing a year later, was putting 100,000 electric delivery vans on the road by 2030. In a&nbsp;<a href=\"https://www.aboutamazon.com/news/transportation/everything-you-need-to-know-about-amazons-electric-delivery-vans-from-rivian?ots=1&amp;tag=w050b-20&amp;linkCode=w50\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(26, 26, 26); background-color: transparent;\">blog post</a>&nbsp;from this July—headlined with a picture of a Prime Rivian van driving through an open field filled with wind turbines—the company proclaims that it has now delivered 800 million packages in the US using EVs, with 15,000 trucks on the road in neighborhoods across the country.</p><p><br></p><p>But those EVs might not be doing much to help the climate. The company’s US delivery vehicle emissions have potentially shot up an estimated 194 percent since the Climate Pledge went into place in 2019, according to a new report.</p><p>The&nbsp;<a href=\"https://stand.earth/wp-content/uploads/2024/09/PRIME_POLLUTER-09.2024.pdf\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(26, 26, 26); background-color: transparent;\">report</a>, released Thursday from corporate campaigners at Stand.earth, attempts to figure out just how much damage shipping the US’s Amazon orders is doing to the planet. It finds that overall emissions from shipping packages have increased 75 percent since 2019, from 3.3 million tons of CO2&nbsp;equivalents in 2019 to 5.8 million tons last year. The 2.5-million-ton difference is the equivalent of putting 595,000 additional gas-powered cars on the road for a year.</p><p>Those Rivian vans are often just delivering the last leg of a package’s life. Before coming to customers’ doorsteps, packages travel by airplane, cargo ship, and/or long-haul truck—transport methods that are both notoriously dirty and tricky to decarbonize.</p><p><br></p>",
    "user" : "Vidit Tamrakar",
    "user_img": " https://avatars.githubusercontent.com/u/114985411?s=400&u=354ccfece0143f68fadbc2a6dd94bce8a7b02bfe&v=4"
},

{   "id": 2,
    "title": "Apple Intelligence is now live in public beta. Here’s what it offers and how to enable it.",
    "url": "https://techcrunch.com/wp-content/uploads/2024/09/CMC_7975.jpg?resize=1280,853",
    "btype": "technology",
    "bdata": "<p>Apple Intelligence took another major step toward mainstream availability Thursday with the launch of the iOS 18.1, iPadOS 18.1, and macOS Sequoia 15.1 public betas.</p><p><br></p><p>Starting Thursday, those who are enrolled in Apple’s public beta program will be able to experience the generative AI-fueled platform the company has been talking up since June.</p><p><br></p><p>For the time being,&nbsp;<a href=\"https://techcrunch.com/2024/07/18/what-is-apple-intelligence-when-is-coming-and-who-will-get-it/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--wp--preset--color--green-900);\">Apple Intelligence</a>&nbsp;is only available in U.S. English. The feature is also indefinitely unavailable in both the EU and the People’s Republic of China, owing to regulatory hurdles. Those in the States can access the feature with the iPhone 15 Pro, iPhone 15 Pro Max, and any member of the newly unveiled iPhone 16 line.</p><p>TechCrunch has been putting the developer beta of iOS 18.1 through its paces as part of our&nbsp;<a href=\"https://techcrunch.com/2024/07/18/what-is-apple-intelligence-when-is-coming-and-who-will-get-it/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--wp--preset--color--green-900);\">iPhone 16 Pro Max review</a>. There are a handful of standout features, including cross-system writing tools, Clean Up for Photos, and the&nbsp;<a href=\"https://techcrunch.com/2024/06/10/apple-gives-siri-a-makeover/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--wp--preset--color--green-900);\">biggest revamp to Siri since launch</a>.</p><p>Writing Tools takes advantage of the kinds of generative AI features familiar to anyone who has played around with ChatGPT and its ilk. Along with proofreading and summarizing, the system will rewrite text in a variety of styles, including professional, concise, and friendly. Over in Mail, users gain a Smart Reply feature, message prioritization, and summaries.</p>",
    "user" : "Vidit Tamrakar",
    "user_img": " https://avatars.githubusercontent.com/u/114985411?s=400&u=354ccfece0143f68fadbc2a6dd94bce8a7b02bfe&v=4"

},
{   "id": 3,
    "title": "Google rolls out automatic passkey syncing via Password Manager",
    "url": "https://techcrunch.com/wp-content/uploads/2021/01/GettyImages-1230444599.jpg?resize=1280,853",
    "btype": "technology",
    "bdata": "<p>Passkeys, the digital credentials that let you sign into apps and websites without entering a password, are getting easier to use for Chrome users.</p><p><br></p><p><a href=\"https://blog.google/technology/safety-security/google-password-manager-passkeys-update-september-2024/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--wp--preset--color--green-900);\">Starting today</a>, you can save passkeys to Google Password Manager, Google’s password manager built into Chrome on Windows, macOS, and Linux, so that your passkeys automatically sync across all your signed-in devices. The Password Manager client on Android can also now automatically sync passkeys, and syncing support for iOS is coming soon. (On ChromeOS, passkey syncing is in beta.)</p><p>Passkey usage is on the rise.&nbsp;<a href=\"https://fidoalliance.org/new-survey-half-of-people-use-passkeys-as-frustrations-with-passwords-continue/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--wp--preset--color--green-900);\">According</a>&nbsp;to the FIDO Alliance, the industry organization that develops authentication standards, 53% of people have enabled passkeys on at least one of their accounts, and passkeys are now supported by 20% of the world’s top 100 websites.</p><p>In 2023, Google&nbsp;<a href=\"https://techcrunch.com/2023/10/10/google-makes-passkeys-the-default-sign-in-method-for-all-users/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--wp--preset--color--green-900);\">made</a>&nbsp;passkeys the default sign-in method for all users. More recently, the company&nbsp;<a href=\"https://techcrunch.com/2024/05/02/google-brings-passkey-support-to-its-advanced-protection-program-ahead-of-the-us-presidential-election/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--wp--preset--color--green-900);\">brought</a>&nbsp;passkey support to its Advanced Protection Program, a program for people at high risk of targeted attacks, like politicians and candidates, ahead of the U.S. presidential election.</p><p><br></p>",
    "user" : "Vidit Tamrakar",
    "user_img": " https://avatars.githubusercontent.com/u/114985411?s=400&u=354ccfece0143f68fadbc2a6dd94bce8a7b02bfe&v=4"

}],
};

export const blogSlice = createSlice({
  name: 'allblog',
  initialState,
  reducers: {

    addallBlog: (state, action) => {
      state.blogs.push(action.payload);
    },

    editallBlog: (state, action) => {
        const index = state.blogs.findIndex(blog => blog.id === action.payload.id);
        if (index !== -1) {
          state.blogs[index] = action.payload;
        }
      },
      deleteallBlog: (state, action) => {
        state.blogs = state.blogs.filter(blog => blog.id !== action.payload);
      },
   
  },
});

export const { addallBlog , editallBlog ,deleteallBlog} = blogSlice.actions;

export default blogSlice.reducer;