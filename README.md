# Matti Salo Website

This is a simple static website built with Next.js and deployed on Vercel. The content is stored in Markdown files, making it easy to update without technical knowledge.

## How to Update Content

### For the Main Page:

1. Go to the `content` folder
2. Open the `main.md` file
3. Edit the content using Markdown format
4. Save your changes

### For the Contact/Booking Page:

1. Go to the `content` folder
2. Open the `contact.md` file
3. Edit the content using Markdown format 
4. Save your changes

## Markdown Basics

Markdown is a simple formatting syntax. Here are some basics:

```
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- List item 1
- List item 2

[Link text](https://example.com)
```

## Deployment

The website automatically rebuilds and deploys when you push changes to the GitHub repository. No additional steps are required.

## Development

To run the website locally:

1. Install Node.js
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. View the site at `http://localhost:3000`

## Building for Production

To create a production build:

```
npm run build
``` 