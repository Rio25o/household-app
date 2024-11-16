# ベースイメージを指定
FROM node:22.11.0
# 環境変数を設定
ENV NODE_ENV=production
ENV CHOKIDAR_USEPOLLING=true

# 作業ディレクトリを設定
WORKDIR /app
# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./
# 依存関係をインストール
RUN npm install --only=production
# ホットリロードを有効にするために、開発用の依存関係をインストール
RUN npm install --only=development
# アプリケーションコードをコピー 
COPY . .
# アプリケーションを起動
CMD ["npm", "start"]
# 必要に応じてポートを公開
EXPOSE 3000