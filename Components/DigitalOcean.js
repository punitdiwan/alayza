import AWS from 'aws-sdk';

/**
 * Digital Ocean Spaces Connection
 */

const spacesEndpoint = new AWS.Endpoint('https://sgp1.digitaloceanspaces.com');
const s3 = new AWS.S3({
      endpoint: "https://lmsimages.sgp1.digitaloceanspaces.com",
      accessKeyId: "DO00D6ZU6AK3QG7NDVTA",
      secretAccessKey: "stpTIAotvH67FwpgD4e2t3LbUBDj8iMt38T3sVfX7eE"
    });
export default s3;