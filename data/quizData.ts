export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "S3バケット「my-unique-bucket」にオブジェクト「image.jpg」を直接アクセスする場合のURLは？",
    options: [
      "https://my-unique-bucket.s3.amazonaws.com/image.jpg",
      "https://s3.amazonaws.com/my-unique-bucket/image.jpg",
      "https://my-unique-bucket.amazonaws.s3.com/image.jpg",
      "https://s3.my-unique-bucket.amazonaws.com/image.jpg"
    ],
    correctAnswer: 0,
    explanation: "S3バケットのオブジェクトに直接アクセスする場合のURLは https://[バケット名].s3.amazonaws.com/[オブジェクト名] または https://s3.[リージョン].amazonaws.com/[バケット名]/[オブジェクト名] の形式です。"
  },
  {
    id: 2,
    question: "S3バケット「static-website」で静的ウェブサイトホスティングを有効にした場合のURLは？",
    options: [
      "https://static-website.s3.amazonaws.com",
      "http://static-website.s3-website-[リージョン].amazonaws.com",
      "https://s3.amazonaws.com/static-website",
      "http://static-website.website.amazonaws.com"
    ],
    correctAnswer: 1,
    explanation: "S3の静的ウェブサイトホスティングを有効にした場合のURLは http://[バケット名].s3-website-[リージョン].amazonaws.com または http://[バケット名].s3-website.[リージョン].amazonaws.com の形式です。HTTPSではなくHTTPであることに注意してください。"
  },
  {
    id: 3,
    question: "CloudFrontディストリビューション「d1a2b3c4d5e6f7」のデフォルトドメインは？",
    options: [
      "https://d1a2b3c4d5e6f7.cloudfront.net",
      "https://d1a2b3c4d5e6f7.cdn.amazonaws.com",
      "https://cloudfront.d1a2b3c4d5e6f7.amazonaws.com",
      "https://d1a2b3c4d5e6f7.aws-cloudfront.com"
    ],
    correctAnswer: 0,
    explanation: "CloudFrontディストリビューションのデフォルトドメインは https://[ディストリビューションID].cloudfront.net の形式です。"
  },
  {
    id: 4,
    question: "API Gateway「api123456789」のデフォルトエンドポイントURLは？（リージョンはus-east-1）",
    options: [
      "https://api123456789.execute-api.us-east-1.amazonaws.com/stage",
      "https://api123456789.apigateway.us-east-1.amazonaws.com/stage",
      "https://api-gateway.us-east-1.amazonaws.com/api123456789/stage",
      "https://us-east-1.api.amazonaws.com/api123456789/stage"
    ],
    correctAnswer: 0,
    explanation: "API Gatewayのデフォルトエンドポイントは https://[API ID].execute-api.[リージョン].amazonaws.com/[ステージ名] の形式です。"
  },
  {
    id: 5,
    question: "Elastic Beanstalkアプリケーション「myapp」の環境「dev」のデフォルトURLは？（リージョンはus-west-2）",
    options: [
      "https://myapp-dev.elasticbeanstalk.us-west-2.amazonaws.com",
      "https://dev.myapp.elasticbeanstalk.com",
      "http://dev.myapp.us-west-2.elasticbeanstalk.com",
      "http://myapp-dev.us-west-2.elasticbeanstalk.com"
    ],
    correctAnswer: 3,
    explanation: "Elastic BeanstalkのデフォルトURLは http://[環境名].[リージョン].elasticbeanstalk.com の形式です。環境名は通常、アプリケーション名とステージ名を組み合わせたものになります。"
  },
  {
    id: 6,
    question: "Cognito User Pool「auth-pool」のドメインプレフィックスを「mycompany-login」に設定した場合のホストされたUIのURLは？（リージョンはeu-west-1）",
    options: [
      "https://mycompany-login.auth.eu-west-1.amazoncognito.com",
      "https://auth-pool.mycompany-login.cognito.amazonaws.com",
      "https://mycompany-login.cognito-idp.eu-west-1.amazonaws.com",
      "https://auth.mycompany-login.eu-west-1.cognito.amazon.com"
    ],
    correctAnswer: 0,
    explanation: "Cognito User Poolのホストされたログインページのデフォルトドメインは https://[ドメインプレフィックス].auth.[リージョン].amazoncognito.com の形式です。"
  },
  {
    id: 7,
    question: "AWS Amplifyアプリ「a1b2c3d4e5f6」のブランチ「main」のデフォルトURLは？",
    options: [
      "https://main.a1b2c3d4e5f6.amplify.aws",
      "https://main.a1b2c3d4e5f6.amplifyapp.com",
      "https://a1b2c3d4e5f6-main.amplifyapp.com",
      "https://main-a1b2c3d4e5f6.aws.amplify.com"
    ],
    correctAnswer: 1,
    explanation: "AWS Amplifyアプリのデフォルトドメインは https://[ブランチ名].[アプリID].amplifyapp.com の形式です。"
  },
  {
    id: 8,
    question: "Amazon AppRunnerサービス「service-a1b2c3」のデフォルトドメインは？",
    options: [
      "https://service-a1b2c3.apprunner.amazonaws.com",
      "https://service-a1b2c3.run.aws.amazon.com",
      "https://service-a1b2c3.awsapprunner.com",
      "https://apprunner-service-a1b2c3.amazonaws.com"
    ],
    correctAnswer: 2,
    explanation: "Amazon AppRunnerサービスのデフォルトドメインは https://[サービスID].awsapprunner.com の形式です。"
  },
  {
    id: 9,
    question: "Amazon LightsailのWordPressインスタンス「wordpress-site」のデフォルトドメインは？",
    options: [
      "https://wordpress-site.lightsailapp.com",
      "https://wordpress-site.amazon-lightsail.com",
      "https://wordpress-site.lightsail.amazonaws.com",
      "https://lightsail.wordpress-site.amazonaws.com"
    ],
    correctAnswer: 0,
    explanation: "Amazon LightsailのWordPressインスタンスのデフォルトドメインは https://[インスタンス名].lightsailapp.com の形式です。"
  },
  {
    id: 10,
    question: "AWS Lambda関数のURLエンドポイントを有効にした場合のURLは？（関数名：my-function、リージョン：ap-northeast-1）",
    options: [
      "https://my-function.lambda.ap-northeast-1.amazonaws.com",
      "https://[ランダムID].lambda-url.ap-northeast-1.on.aws",
      "https://[ランダムID].execute-api.ap-northeast-1.amazonaws.com",
      "https://lambda.ap-northeast-1.amazonaws.com/my-function"
    ],
    correctAnswer: 1,
    explanation: "Lambda関数のURLエンドポイントは https://[ランダムID].lambda-url.[リージョン].on.aws の形式です。関数名はURLに含まれず、AWSが生成するランダムなIDが使用されます。"
  },
  {
    id: 11,
    question: "Amazon ECRのプライベートリポジトリ「my-repo」のイメージをpullする際のURLは？（アカウントID：123456789012、リージョン：us-east-2）",
    options: [
      "123456789012.ecr.us-east-2.amazonaws.com/my-repo:latest",
      "ecr.us-east-2.amazonaws.com/123456789012/my-repo:latest",
      "us-east-2.ecr.123456789012.amazonaws.com/my-repo:latest",
      "my-repo.123456789012.ecr.us-east-2.amazonaws.com:latest"
    ],
    correctAnswer: 0,
    explanation: "Amazon ECRのプライベートリポジトリのURLは [アカウントID].dkr.ecr.[リージョン].amazonaws.com/[リポジトリ名]:[タグ] の形式です。"
  },
  {
    id: 12,
    question: "AWS Cloud9環境「my-ide」のデフォルトURLは？（リージョン：eu-central-1）",
    options: [
      "https://my-ide.cloud9.eu-central-1.amazonaws.com",
      "https://eu-central-1.console.aws.amazon.com/cloud9/my-ide",
      "https://[環境ID].vfs.cloud9.eu-central-1.amazonaws.com",
      "https://cloud9.eu-central-1.amazonaws.com/my-ide"
    ],
    correctAnswer: 2,
    explanation: "AWS Cloud9環境のデフォルトURLは https://[環境ID].vfs.cloud9.[リージョン].amazonaws.com の形式です。環境IDは自動生成される一意の識別子です。"
  },
  {
    id: 13,
    question: "Amazon QuickSightのダッシュボード共有URLは？（アカウントID：123456789012、リージョン：us-west-2）",
    options: [
      "https://quicksight.aws.amazon.com/sn/dashboards/[ダッシュボードID]",
      "https://us-west-2.quicksight.aws.amazon.com/sn/dashboards/[ダッシュボードID]",
      "https://123456789012.quicksight.us-west-2.amazonaws.com/dashboards/[ダッシュボードID]",
      "https://quicksight.us-west-2.amazonaws.com/123456789012/dashboards/[ダッシュボードID]"
    ],
    correctAnswer: 1,
    explanation: "Amazon QuickSightのダッシュボード共有URLは https://[リージョン].quicksight.aws.amazon.com/sn/dashboards/[ダッシュボードID] の形式です。リージョンによっては、リージョン部分がないURLになることもあります。"
  },
  {
    id: 14,
    question: "AWS AppSyncのGraphQL APIエンドポイントのURLは？（API ID：abcdefghij、リージョン：ap-southeast-2）",
    options: [
      "https://abcdefghij.appsync-api.ap-southeast-2.amazonaws.com/graphql",
      "https://appsync.ap-southeast-2.amazonaws.com/abcdefghij/graphql",
      "https://graphql.abcdefghij.appsync.ap-southeast-2.amazonaws.com",
      "https://ap-southeast-2.appsync.amazonaws.com/graphql/abcdefghij"
    ],
    correctAnswer: 0,
    explanation: "AWS AppSyncのGraphQL APIエンドポイントのURLは https://[API ID].appsync-api.[リージョン].amazonaws.com/graphql の形式です。"
  },
  {
    id: 15,
    question: "Amazon OpenSearchのドメイン「search-data」のエンドポイントURLは？（リージョン：eu-west-2）",
    options: [
      "https://search-data.eu-west-2.opensearch.amazonaws.com",
      "https://search-data.opensearch.eu-west-2.amazonaws.com",
      "https://opensearch.eu-west-2.amazonaws.com/search-data",
      "https://eu-west-2.opensearch.amazonaws.com/search-data"
    ],
    correctAnswer: 1,
    explanation: "Amazon OpenSearchのドメインエンドポイントは https://[ドメイン名].opensearch.[リージョン].amazonaws.com の形式です。"
  },
  {
    id: 16,
    question: "AWS IoT Core「my-iot-endpoint」のデータエンドポイントURLは？（アカウント固有のエンドポイント：a1b2c3d4e5f6、リージョン：us-east-1）",
    options: [
      "https://my-iot-endpoint.iot.us-east-1.amazonaws.com",
      "https://a1b2c3d4e5f6-ats.iot.us-east-1.amazonaws.com",
      "https://iot.us-east-1.amazonaws.com/my-iot-endpoint",
      "https://a1b2c3d4e5f6.iot-endpoint.us-east-1.amazonaws.com"
    ],
    correctAnswer: 1,
    explanation: "AWS IoT Coreのデータエンドポイントは https://[アカウント固有のエンドポイント]-ats.iot.[リージョン].amazonaws.com の形式です。エンドポイントはAWSアカウントごとに一意です。"
  },
  {
    id: 17,
    question: "Amazon Kinesis Video Streams「my-stream」のデータURLは？（リージョン：us-west-1）",
    options: [
      "https://kinesisvideo.us-west-1.amazonaws.com/my-stream",
      "https://my-stream.kinesisvideo.us-west-1.amazonaws.com",
      "https://kvs.us-west-1.amazonaws.com/my-stream",
      "https://video.kinesis.us-west-1.amazonaws.com/my-stream"
    ],
    correctAnswer: 0,
    explanation: "Amazon Kinesis Video StreamsのデータURLは https://kinesisvideo.[リージョン].amazonaws.com/[ストリーム名] の形式です。"
  },
  {
    id: 18,
    question: "Amazon MSKクラスター「kafka-cluster」のブートストラップサーバーアドレスは？（リージョン：eu-north-1）",
    options: [
      "kafka-cluster.msk.eu-north-1.amazonaws.com:9092",
      "b-1.kafka-cluster.abcdef.eu-north-1.amazonaws.com:9092",
      "msk.eu-north-1.amazonaws.com/kafka-cluster:9092",
      "kafka-cluster.eu-north-1.kafka.amazonaws.com:9092"
    ],
    correctAnswer: 1,
    explanation: "Amazon MSKクラスターのブートストラップサーバーアドレスは b-[ノード番号].[クラスター名].[一意のID].[リージョン].amazonaws.com:9092 の形式です。"
  },
  {
    id: 19,
    question: "Amazon ElastiCacheのRedisクラスター「redis-cache」のプライマリエンドポイントは？（リージョン：ap-south-1）",
    options: [
      "redis-cache.abcdef.ng.0001.ap-south-1.elasticache.amazonaws.com",
      "redis-cache.elasticache.ap-south-1.amazonaws.com",
      "ap-south-1.elasticache.amazonaws.com/redis-cache",
      "redis.ap-south-1.elasticache.amazonaws.com/redis-cache"
    ],
    correctAnswer: 0,
    explanation: "Amazon ElastiCacheのRedisクラスターのプライマリエンドポイントは [クラスター名].[一意のID].ng.0001.[リージョン].elasticache.amazonaws.com の形式です。"
  },
  {
    id: 20,
    question: "Amazon MQのRabbitMQブローカー「mq-broker」のエンドポイントは？（リージョン：ca-central-1）",
    options: [
      "mq-broker.mq.ca-central-1.amazonaws.com",
      "b-12345678-1.mq.ca-central-1.amazonaws.com",
      "rabbitmq.ca-central-1.amazonaws.com/mq-broker",
      "mq-broker.rabbitmq.ca-central-1.amazonaws.com"
    ],
    correctAnswer: 1,
    explanation: "Amazon MQのRabbitMQブローカーのエンドポイントは b-[一意のID].[リージョン].amazonaws.com の形式です。ブローカー名はエンドポイントに直接含まれません。"
  }
];
