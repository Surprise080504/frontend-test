echo "Pulling source code..."
git pull

echo "Installing dependencies..."
yarn install

echo "Building frontend..."
yarn build

echo "Building storybook..."
yarn build-storybook

# TODO review run without input
# echo "Running tests..."
# yarn test

echo "Finished deployment"
