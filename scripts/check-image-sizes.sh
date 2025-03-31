#!/bin/bash

# Thresholds (in KB)
WARN_SIZE=300
ERROR_SIZE=500

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Create the directory if it doesn't exist
mkdir -p scripts

echo -e "${GREEN}Scanning for large images in public directory...${NC}"
echo -e "${YELLOW}Warning threshold: ${WARN_SIZE}KB${NC}"
echo -e "${RED}Error threshold: ${ERROR_SIZE}KB${NC}"
echo ""

# Find all images
image_files=$(find public -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif" -o -name "*.webp" \))

# Stats variables
total_images=0
warn_count=0
error_count=0
total_size=0

# Process each image
for file in $image_files; do
  size_kb=$(du -k "$file" | cut -f1)
  total_images=$((total_images + 1))
  total_size=$((total_size + size_kb))
  
  if [ $size_kb -gt $ERROR_SIZE ]; then
    echo -e "${RED}[ERROR] ${file} - ${size_kb}KB${NC}"
    error_count=$((error_count + 1))
  elif [ $size_kb -gt $WARN_SIZE ]; then
    echo -e "${YELLOW}[WARN]  ${file} - ${size_kb}KB${NC}"
    warn_count=$((warn_count + 1))
  else
    echo -e "${GREEN}[OK]    ${file} - ${size_kb}KB${NC}"
  fi
done

echo ""
echo -e "Summary:"
echo -e "  Total images: ${total_images}"
echo -e "  Total size: ${total_size}KB"
echo -e "  ${GREEN}Good: $((total_images - warn_count - error_count))${NC}"
echo -e "  ${YELLOW}Warnings: ${warn_count}${NC}"
echo -e "  ${RED}Errors: ${error_count}${NC}"

if [ $error_count -gt 0 ]; then
  echo ""
  echo -e "${RED}Action needed: Please optimize images above ${ERROR_SIZE}KB before committing.${NC}"
  echo -e "  Recommended tools:"
  echo -e "  - Online: https://squoosh.app/ or https://tinypng.com/"
  echo -e "  - Mac: ImageOptim app"
  echo -e "  - Command line: 'npm install -g imagemin-cli'"
  exit 1
elif [ $warn_count -gt 0 ]; then
  echo ""
  echo -e "${YELLOW}Consider optimizing images above ${WARN_SIZE}KB for better performance.${NC}"
fi

exit 0 