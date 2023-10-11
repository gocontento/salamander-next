# Salamander

The [Contento](https://www.contento.io) demo site, built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com).

If you’ve just signed up for a Contento account and deployed the demo site there then you will need to wait until its
finished before you can continue setting up this codebase. 


## Getting Started

First, set up your `.env` file, you can copy the `.env.example` file as a starting point and then fill in the values.

You’ll need an [API key](https://app.contento.io/account/api-keys), [Site ID](https://app.contento.io/sites) and [Preview Secret](https://app.contento.io/settings/preview).

Then, in the root of the project run:

```bash
npm install
```

You can use `yarn`, `pnpm` or `bun` if you prefer.

Next up, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Seeing content changes locally

Once you have everything up and running, you might want to change or add some content - try adding a new blog post and
hit publish.

Now if you refresh the `/blog` route you may notice it doesn’t appear - this is because of the
[Next.js Data Cache](https://nextjs.org/docs/app/building-your-application/caching#data-cache). Next.js automatically
caches the result of data requests that use `fetch`, which our SDK is doing in the background.

To get around this, you can just force-reload the page, or get rid of the whole cache by running `rm -fr .next/cache` or
even [opt out](https://nextjs.org/docs/app/building-your-application/caching#opting-out-1) for a specific route.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Learn More

Once you’ve played around with the demo inside Contento, and had a look over this codebase you will probably want to
start digging in to the [docs](https://www.contento.io/docs), here are some helpful jumping off points:
- [Architecture Guide](https://www.contento.io/docs/architecture-guide) - a high-level guide that outlines the different kinds of objects that you will interact with in the admin panel or API
- [Content API](https://www.contento.io/docs/content-api/v1) - a read-only REST API for fetching content from Contento
- [Image Optimization API](https://www.contento.io/docs/image-api) - crop, resize, change the quality of your images and so much more
- [JS Client](https://www.contento.io/docs/sdk/client) & [Next.js Toolkit](https://www.contento.io/docs/sdk/next) - what we’re using in this demo project


## Support

If you have a bug or feature request then please [submit an issue](https://github.com/gocontento/salamander-next/issues/new).

If you have questions about Contento, or need help in some other way, then you can reach out to us via
[email](mailto:josh@contento.io) or join our [Discord server](https://discord.gg/dZERPfBV).


## TODO
- [x] Info page layout
- [x] Blog post page
- [x] Blog index page
- [x] Blog category index page
- [x] Refactor API calls to use new methods as they come available - array syntax
- [x] Make sure home can be fetched by ID
- [x] Close mobile nav on click
- [x] SEO in Contento
- [x] Wire up the SEO
- [x] Make more static
- [ ] Better docs
- [ ] Pagination in index pages with new limit / offset pagination
- [ ] Deal with hero optional blocks
- [ ] Refactor data mapping in components to a middleware?
