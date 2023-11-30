export let { APS_CLIENT_ID, APS_CLIENT_SECRET, APS_BUCKET = `${APS_CLIENT_ID.toLowerCase()}-forge-app`, PORT = 8080 } = process.env;
if (!APS_CLIENT_ID || !APS_CLIENT_SECRET) {
   console.warn("Missing some of the environment variables.");
   process.exit(1);
}
