#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Building Fully Tactile Art SF static site...${NC}"
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
  echo -e "${YELLOW}Build failed. Please fix errors and try again.${NC}"
  exit 1
fi

echo -e "${GREEN}Build successful!${NC}"
echo -e "Static site generated in the 'out' directory.\n"

echo -e "${BLUE}Checking image sizes in final build...${NC}"
npm run check-images

echo -e "\n${GREEN}Ready for deployment!${NC}"
echo -e "To deploy to your hosting provider:"
echo -e "1. Upload the contents of the 'out' directory to your host"
echo -e "2. Ensure your host is configured to serve index.html for directory requests"
echo -e "3. If using Render.com, simply connect this repository and set:"
echo -e "   - Build Command: npm run build"
echo -e "   - Publish Directory: out"
echo -e "\nVisit your deployed site to verify everything works correctly."

exit 0 