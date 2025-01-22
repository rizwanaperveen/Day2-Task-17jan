import { createClient } from '@sanity/client';


const client = createClient({
  projectId: 'xjikao2g', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: true,
  token: 'skLr0Kbb2QoY8oLAwP2klLOixMZYrrYouPQSlrTHHkWyAVdsrvVaoaGmjigSql1rB97We7XZdXiesbV83OFbfgQ9HvWjNnT7bzV5HBfWHCh9LazZ2RDyiWE8HPZJQTSsT9kDBwFX9CENe6rQBVXejF4FIOAi6DzpGRhRdn0hVVaghiqoXgFj', // Replace with your Sanity API token
});


export default client;
