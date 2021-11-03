#!/bin/sh 
cd home/snehajha/Downloads/tibil-react-dashboard
echo “Building React Project …” 
npm run build 
echo “Copying html file …” 
cp -r build html 
echo “Connecting to AWS VM and copying file to /var/www/html/ …” sudo scp ssh -i "dmap_server.pem" ubuntu@ec2-18-117-84-251.us-east-2.compute.amazonaws.com

echo “Removing html file from local directory …” 
rm -r html
