<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
    <head>
      <link rel="stylesheet" href="/css/colors.css" />
      <style>
        body {
        max-width: 900px;
        padding-left: 1.5rem;
        background-color: var(--background-color, white);
        color: var(--font-color, black);
        line-height: 1.5;
        }

        figure {
        max-width: 80%;
        }

        img {
        max-width: 100%;
        margin: 0 auto;
        }

        video, iframe {
        display: block;
        margin: 1rem auto;
        }

        blockquote {
        border-left: 5px solid var(--quote-border);
        padding: 0.25rem 0.5rem;
        background-color: var(--quote-background, white);
        }

        details {
        border: 1px solid var(--font-color, black);
        }
        
        summary {
        cursor: pointer;
        display: block;
        padding: 0.25rem;
        font-weight: bold;
        }
        
        details[open] summary {
        border-bottom: 1px solid var(--font-color, black);
        }

        ul {
        margin: 0;
        padding: 0;
        }
        li {
        list-style-type: none;
        padding: 0.25rem 0;
        }

        .open-article {
        width: 100%;
        text-align: center;
        font-size: 1.3rem;
        display: block;
        margin: 1rem 0;
        }
      </style>
    </head>
  <body>
    <h1>Oddwords Feed</h1>
    <p>This is a HTML render of the website's RSS feed. Unless you're intentionally checking this page, you're much better off reading the main site, which you can reach <a href="/">here.</a></p>
    <ul>
      <xsl:for-each select="rss/channel/item">
        <li>
          <details>
            <summary>
              <xsl:value-of select="title" />
            </summary>
            <a class="open-article" href="{link}">Open Article</a>
            <xsl:copy-of select="description" />
          </details>
        </li>
      </xsl:for-each>
    </ul>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet> 
