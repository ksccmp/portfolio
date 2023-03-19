/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://ksc-portfolio.netlify.app',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 1,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*', // 모든 agent 허용
                allow: '/', // 모든 페이지 주소 크롤링 허용
            },
        ],
    },
};
