# Static Website - hjerteoghjem.dk

This repository contains everything related to hosting of hjerteoghjem.dk. It's configured for Google Cloud Build to automatically deploy static website files to a Google Cloud Storage bucket.

## Prerequisites

1. Google Cloud Project with Cloud Build API enabled
2. A GCS bucket created for hosting the website
3. Appropriate IAM permissions (Cloud Build service account needs Storage Admin role)

## Setup Instructions

### 1. Create a GCS Bucket

```bash
gsutil mb -c STANDARD -l YOUR_REGION gs://hjerteoghjem
gsutil mb -p YOUR_PROJECT_ID -c STANDARD -l YOUR_REGION gs://YOUR_BUCKET_NAME
```

### 2. Configure Cloud Build

Edit `cloudbuild.yaml` and replace `your-bucket-name` with your actual bucket name, or use substitution variables when triggering the build.

### 3. Trigger the Build

#### Option A: Using gcloud CLI

```bash
gcloud builds submit --config=cloudbuild.yaml \
  --substitutions=_BUCKET_NAME=YOUR_BUCKET_NAME
```

#### Option B: Using Cloud Console

1. Go to Cloud Build > Triggers
2. Create a new trigger
3. Connect your repository
4. Set the configuration file to `cloudbuild.yaml`
5. Add substitution variable: `_BUCKET_NAME` = `YOUR_BUCKET_NAME`
6. Save and run

#### Option C: Automatic on Push (Recommended)

1. Create a trigger in Cloud Build
2. Set it to run on push to your main branch
3. Use the substitution variable `_BUCKET_NAME` = `YOUR_BUCKET_NAME`

### 4. Access Your Website

After the build completes, your website will be available at:
- `https://storage.googleapis.com/YOUR_BUCKET_NAME/index.html`
- Or if you've set up a custom domain: `https://YOUR_DOMAIN`

## Custom Domain Setup (Optional)

To use a custom domain:

1. Set up a Cloud Load Balancer or use Cloud CDN
2. Point your domain's DNS to the load balancer IP
3. Configure SSL certificate

Alternatively, you can use Firebase Hosting or Cloud Run for easier custom domain setup.

## Files Included

The build will copy all files in the repository root to the bucket:
- `index.html`
- `clearing.html`
- `kontakt.html`
- `om-mig.html`
- `samtaler.html`
- `styles.css`
- Any other static assets

## Notes

- The bucket will be configured to serve `index.html` as the main page
- All files will be publicly readable
- A 404 error page can be added later if needed

