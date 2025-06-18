export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  links?: {
    title: string;
    url: string;
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  // コンソールURL・サービス紹介ページ系の問題
  {
    id: 1,
    question: "Amazon S3のコンソールURLは？",
    options: [
      "https://s3.amazon.com/",
      "https://s3.aws.amazon.com/",
      "https://console.aws.amazon.com/s3/",
      "https://amazon.com/s3/"
    ],
    correctAnswer: 2,
    explanation: "S3のコンソールURLは https://console.aws.amazon.com/s3/ です。AWSのマネジメントコンソールは基本的に console.aws.amazon.com ドメインを使用しています。",
    links: [
      {
        title: "Amazon S3 コンソール",
        url: "https://console.aws.amazon.com/s3/"
      },
      {
        title: "Amazon S3 ドキュメント",
        url: "https://docs.aws.amazon.com/s3/"
      }
    ]
  },
  {
    id: 2,
    question: "AWS Lambdaのコンソールページは？",
    options: [
      "https://lambda.amazon.com/",
      "https://console.aws.amazon.com/lambda/",
      "https://aws.amazon.com/lambda/",
      "https://amazon.aws.com/lambda/"
    ],
    correctAnswer: 1,
    explanation: "AWS Lambdaのコンソールは https://console.aws.amazon.com/lambda/ です。サービスページは aws.amazon.com/lambda/ ですが、コンソールは console.aws.amazon.com ドメインを使用します。",
    links: [
      {
        title: "AWS Lambda コンソール",
        url: "https://console.aws.amazon.com/lambda/"
      },
      {
        title: "AWS Lambda サービスページ",
        url: "https://aws.amazon.com/lambda/"
      },
      {
        title: "AWS Lambda ドキュメント",
        url: "https://docs.aws.amazon.com/lambda/"
      }
    ]
  },
  {
    id: 3,
    question: "AWS公式サイトのトップページURLは？",
    options: [
      "https://aws.com/",
      "https://aws.amazon.com/",
      "https://amazon.com/aws/",
      "https://amazon.aws.com/"
    ],
    correctAnswer: 1,
    explanation: "AWS公式サイトのトップページは https://aws.amazon.com/ です。"
  },
  {
    id: 4,
    question: "Amazon EC2のサービス紹介ページは？",
    options: [
      "https://aws.amazon.com/ec2/",
      "https://amazon.com/ec2/",
      "https://ec2.aws.amazon.com/",
      "https://amazon.aws.com/ec2/"
    ],
    correctAnswer: 0,
    explanation: "Amazon EC2のサービス紹介ページは https://aws.amazon.com/ec2/ です。AWSのサービス紹介ページは基本的に aws.amazon.com/[サービス名]/ の形式です。"
  },
  {
    id: 5,
    question: "AWS CloudFormationのコンソールURLは？",
    options: [
      "https://cloudformation.amazon.com/",
      "https://aws.amazon.com/cloudformation/console/",
      "https://console.aws.amazon.com/cloudformation/",
      "https://amazon.aws.com/cloudformation/"
    ],
    correctAnswer: 2,
    explanation: "AWS CloudFormationのコンソールURLは https://console.aws.amazon.com/cloudformation/ です。"
  },
  {
    id: 6,
    question: "Amazon DynamoDBのサービス紹介ページは？",
    options: [
      "https://dynamodb.aws.amazon.com/",
      "https://aws.amazon.com/dynamodb/",
      "https://amazon.com/dynamodb/",
      "https://dynamodb.amazon.com/"
    ],
    correctAnswer: 1,
    explanation: "Amazon DynamoDBのサービス紹介ページは https://aws.amazon.com/dynamodb/ です。"
  },
  {
    id: 7,
    question: "AWS IAMのコンソールURLは？",
    options: [
      "https://iam.amazon.com/",
      "https://aws.amazon.com/iam/console/",
      "https://console.aws.amazon.com/iam/home",
      "https://amazon.aws.com/iam/"
    ],
    correctAnswer: 2,
    explanation: "AWS IAMのコンソールURLは https://console.aws.amazon.com/iam/home です。IAMコンソールでは、ユーザー、グループ、ロール、ポリシーなどを管理できます。",
    links: [
      {
        title: "AWS IAM コンソール",
        url: "https://console.aws.amazon.com/iam/home"
      },
      {
        title: "AWS IAM サービスページ",
        url: "https://aws.amazon.com/iam/"
      },
      {
        title: "AWS IAM ドキュメント",
        url: "https://docs.aws.amazon.com/iam/"
      }
    ]
  },
  {
    id: 8,
    question: "Amazon RDSのサービス紹介ページは？",
    options: [
      "https://aws.amazon.com/rds/",
      "https://rds.aws.amazon.com/",
      "https://amazon.com/rds/",
      "https://rds.amazon.com/"
    ],
    correctAnswer: 0,
    explanation: "Amazon RDSのサービス紹介ページは https://aws.amazon.com/rds/ です。"
  },
  {
    id: 9,
    question: "AWS Marketplaceのウェブサイトは？",
    options: [
      "https://marketplace.aws/",
      "https://aws.amazon.com/marketplace/",
      "https://marketplace.amazon.com/aws/",
      "https://amazon.com/aws-marketplace/"
    ],
    correctAnswer: 1,
    explanation: "AWS Marketplaceのウェブサイトは https://aws.amazon.com/marketplace/ です。"
  },
  {
    id: 10,
    question: "Amazon CloudWatchのコンソールURLは？",
    options: [
      "https://cloudwatch.amazon.com/",
      "https://aws.amazon.com/cloudwatch/console/",
      "https://console.aws.amazon.com/cloudwatch/home",
      "https://amazon.aws.com/cloudwatch/"
    ],
    correctAnswer: 2,
    explanation: "Amazon CloudWatchのコンソールURLは https://console.aws.amazon.com/cloudwatch/home です。多くのAWSサービスのコンソールURLは /home サフィックスを含みます。",
    links: [
      {
        title: "Amazon CloudWatch コンソール",
        url: "https://console.aws.amazon.com/cloudwatch/home"
      },
      {
        title: "Amazon CloudWatch サービスページ",
        url: "https://aws.amazon.com/cloudwatch/"
      },
      {
        title: "Amazon CloudWatch ドキュメント",
        url: "https://docs.aws.amazon.com/cloudwatch/"
      }
    ]
  },
  {
    id: 11,
    question: "AWS Documentationのメインページは？",
    options: [
      "https://aws.amazon.com/documentation/",
      "https://docs.aws.amazon.com/",
      "https://documentation.aws.amazon.com/",
      "https://amazon.com/aws-docs/"
    ],
    correctAnswer: 1,
    explanation: "AWS Documentationのメインページは https://docs.aws.amazon.com/ です。ドキュメントは独自のサブドメイン（docs）を使用しています。"
  },
  {
    id: 12,
    question: "AWS Trainingのウェブサイトは？",
    options: [
      "https://aws.amazon.com/training/",
      "https://training.aws.amazon.com/",
      "https://aws.training/",
      "https://amazon.com/aws-training/"
    ],
    correctAnswer: 2,
    explanation: "AWS Trainingのウェブサイトは https://aws.training/ です。トレーニングサイトは独自のドメイン（aws.training）を使用しています。"
  },
  {
    id: 13,
    question: "AWS Pricing Calculatorのウェブサイトは？",
    options: [
      "https://aws.amazon.com/pricing-calculator/",
      "https://calculator.aws.amazon.com/",
      "https://calculator.aws/",
      "https://pricing.aws.amazon.com/"
    ],
    correctAnswer: 2,
    explanation: "AWS Pricing Calculatorのウェブサイトは https://calculator.aws/ です。料金計算ツールは独自のドメイン（calculator.aws）を使用しています。"
  },
  {
    id: 14,
    question: "AWS Management Consoleのメインページは？",
    options: [
      "https://aws.amazon.com/console/",
      "https://console.aws.amazon.com/",
      "https://management.aws.amazon.com/",
      "https://amazon.com/aws-console/"
    ],
    correctAnswer: 1,
    explanation: "AWS Management Consoleのメインページは https://console.aws.amazon.com/ です。ここからすべてのAWSサービスのコンソールにアクセスできます。"
  },
  {
    id: 15,
    question: "Amazon API Gatewayのコンソールページは？",
    options: [
      "https://apigateway.amazon.com/",
      "https://console.aws.amazon.com/apigateway/",
      "https://aws.amazon.com/api-gateway/console/",
      "https://console.aws.amazon.com/api-gateway/"
    ],
    correctAnswer: 1,
    explanation: "Amazon API Gatewayのコンソールページは https://console.aws.amazon.com/apigateway/ です。コンソールURLでは、サービス名のハイフンが省略されることがあります。"
  },
  // 具体的なドメイン構成系の問題
  {
    id: 16,
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
    id: 17,
    question: "S3バケット「static-website」で静的ウェブサイトホスティングを有効にした場合のURLは？",
    options: [
      "https://static-website.s3.amazonaws.com",
      "http://static-website.s3-website-[リージョン].amazonaws.com",
      "https://s3.amazonaws.com/static-website",
      "http://static-website.website.amazonaws.com"
    ],
    correctAnswer: 1,
    explanation: "S3の静的ウェブサイトホスティングを有効にした場合のURLは http://[バケット名].s3-website-[リージョン].amazonaws.com または http://[バケット名].s3-website.[リージョン].amazonaws.com の形式です。S3の静的ウェブサイトホスティングはHTTPSをネイティブサポートしていないため、HTTPSが必要な場合はCloudFrontを使用する必要があります。"
  },
  {
    id: 18,
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
    id: 19,
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
    id: 20,
    question: "Elastic Beanstalkアプリケーション「myapp」の環境「dev」のデフォルトURLは？（リージョンはus-west-2）",
    options: [
      "https://myapp-dev.elasticbeanstalk.us-west-2.amazonaws.com",
      "https://dev.myapp.elasticbeanstalk.com",
      "http://dev.myapp.us-west-2.elasticbeanstalk.com",
      "http://myapp-dev.us-west-2.elasticbeanstalk.com"
    ],
    correctAnswer: 3,
    explanation: "Elastic BeanstalkのデフォルトURLは http://[環境名].[リージョン].elasticbeanstalk.com の形式です。HTTPSではなくHTTPがデフォルトです。"
  },
  {
    id: 21,
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
    id: 22,
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
    id: 23,
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
    id: 24,
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
    id: 25,
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
    id: 26,
    question: "Amazon ECRのプライベートリポジトリ「my-repo」のイメージをpullする際のURLは？（アカウントID：123456789012、リージョン：us-east-2）",
    options: [
      "123456789012.dkr.ecr.us-east-2.amazonaws.com/my-repo:latest",
      "ecr.us-east-2.amazonaws.com/123456789012/my-repo:latest",
      "us-east-2.ecr.123456789012.amazonaws.com/my-repo:latest",
      "my-repo.123456789012.ecr.us-east-2.amazonaws.com:latest"
    ],
    correctAnswer: 0,
    explanation: "Amazon ECRのプライベートリポジトリのURLは [アカウントID].dkr.ecr.[リージョン].amazonaws.com/[リポジトリ名]:[タグ] の形式です。"
  },
  {
    id: 28,
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
    id: 29,
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
    id: 30,
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
    id: 31,
    question: "AWS Systems Managerのコンソールページは？",
    options: [
      "https://console.aws.amazon.com/systems-manager/",
      "https://console.aws.amazon.com/ssm/",
      "https://ssm.aws.amazon.com/",
      "https://systems-manager.amazon.com/"
    ],
    correctAnswer: 0,
    explanation: "AWS Systems ManagerのコンソールページはフルネームのURLを使用して https://console.aws.amazon.com/systems-manager/ です。SSMは略称ですが、URLでは使用されません。",
    links: [
      {
        title: "AWS Systems Manager コンソール",
        url: "https://console.aws.amazon.com/systems-manager/"
      }
    ]
  },
  {
    id: 32,
    question: "Amazon EventBridgeのコンソールページは？",
    options: [
      "https://console.aws.amazon.com/eventbridge/",
      "https://console.aws.amazon.com/events/home",
      "https://eventbridge.aws.amazon.com/",
      "https://events.amazon.com/"
    ],
    correctAnswer: 1,
    explanation: "Amazon EventBridgeのコンソールページは https://console.aws.amazon.com/events/home です。EventBridgeは以前のCloudWatch Eventsの後継サービスで、コンソールURLは /events/home を使用します。",
    links: [
      {
        title: "Amazon EventBridge コンソール",
        url: "https://console.aws.amazon.com/events/home"
      },
      {
        title: "Amazon EventBridge サービスページ",
        url: "https://aws.amazon.com/eventbridge/"
      },
      {
        title: "Amazon EventBridge ドキュメント",
        url: "https://docs.aws.amazon.com/eventbridge/"
      }
    ]
  },
  {
    id: 34,
    question: "Amazon Redshiftクラスター「data-warehouse」のエンドポイントは？（リージョン：us-west-2）",
    options: [
      "data-warehouse.redshift.us-west-2.amazonaws.com",
      "data-warehouse.abcdef.us-west-2.redshift.amazonaws.com",
      "redshift.us-west-2.amazonaws.com/data-warehouse",
      "us-west-2.redshift.amazonaws.com/data-warehouse"
    ],
    correctAnswer: 1,
    explanation: "Amazon Redshiftクラスターのエンドポイントは [クラスター名].[一意のID].[リージョン].redshift.amazonaws.com の形式です。"
  },
  {
    id: 35,
    question: "AWS Batch「job-queue」のコンソールページは？",
    options: [
      "https://console.aws.amazon.com/batch/",
      "https://batch.aws.amazon.com/",
      "https://console.aws.amazon.com/aws-batch/",
      "https://aws-batch.amazon.com/"
    ],
    correctAnswer: 0,
    explanation: "AWS Batchのコンソールページは https://console.aws.amazon.com/batch/ です。"
  },
  {
    id: 36,
    question: "Amazon Kinesis Data Streamsのストリーム「user-activity」にアクセスするAPIエンドポイントは？（リージョン：ap-northeast-1）",
    options: [
      "https://kinesis.ap-northeast-1.amazonaws.com",
      "https://user-activity.kinesis.ap-northeast-1.amazonaws.com",
      "https://streams.kinesis.ap-northeast-1.amazonaws.com",
      "https://ap-northeast-1.kinesis.amazonaws.com/user-activity"
    ],
    correctAnswer: 0,
    explanation: "Amazon Kinesis Data StreamsのAPIエンドポイントは https://kinesis.[リージョン].amazonaws.com の形式です。ストリーム名はAPIリクエストのパラメータとして指定します。"
  },
  {
    id: 37,
    question: "AWS X-Rayのコンソールページは？",
    options: [
      "https://console.aws.amazon.com/xray/",
      "https://xray.aws.amazon.com/",
      "https://console.aws.amazon.com/x-ray/",
      "https://aws-xray.amazon.com/"
    ],
    correctAnswer: 0,
    explanation: "AWS X-Rayのコンソールページは https://console.aws.amazon.com/xray/ です。"
  },
  {
    id: 38,
    question: "Amazon SNSのAPIエンドポイントは？（リージョン：eu-central-1）",
    options: [
      "https://sns.eu-central-1.amazonaws.com",
      "https://eu-central-1.sns.amazonaws.com",
      "https://notifications.eu-central-1.amazonaws.com",
      "https://messaging.eu-central-1.amazonaws.com"
    ],
    correctAnswer: 0,
    explanation: "Amazon SNSのAPIエンドポイントは https://sns.[リージョン].amazonaws.com の形式です。"
  },
  {
    id: 39,
    question: "AWS CloudTrailのコンソールページは？",
    options: [
      "https://console.aws.amazon.com/cloudtrail/",
      "https://cloudtrail.aws.amazon.com/",
      "https://console.aws.amazon.com/cloud-trail/",
      "https://trail.aws.amazon.com/"
    ],
    correctAnswer: 0,
    explanation: "AWS CloudTrailのコンソールページは https://console.aws.amazon.com/cloudtrail/ です。"
  },
  {
    id: 41,
    question: "AWS Config のコンソールページは？",
    options: [
      "https://console.aws.amazon.com/config/",
      "https://config.aws.amazon.com/",
      "https://console.aws.amazon.com/aws-config/",
      "https://aws-config.amazon.com/"
    ],
    correctAnswer: 0,
    explanation: "AWS Config のコンソールページは https://console.aws.amazon.com/config/ です。"
  },
  {
    id: 42,
    question: "Amazon WorkSpaces「workspace-12345」のアクセスURLは？",
    options: [
      "https://workspace-12345.workspaces.amazonaws.com",
      "https://clients.amazonworkspaces.com",
      "https://workspaces.aws.amazon.com/workspace-12345",
      "https://12345.workspaces.amazonaws.com"
    ],
    correctAnswer: 1,
    explanation: "Amazon WorkSpacesのクライアントアクセスURLは https://clients.amazonworkspaces.com です。個別のワークスペースIDはクライアント内で指定します。"
  },
  {
    id: 43,
    question: "AWS Secrets Manager「prod/database/credentials」のシークレットにアクセスするAPIエンドポイントは？（リージョン：ca-central-1）",
    options: [
      "https://secretsmanager.ca-central-1.amazonaws.com",
      "https://secrets.ca-central-1.amazonaws.com",
      "https://prod-database-credentials.secretsmanager.ca-central-1.amazonaws.com",
      "https://ca-central-1.secretsmanager.amazonaws.com"
    ],
    correctAnswer: 0,
    explanation: "AWS Secrets ManagerのAPIエンドポイントは https://secretsmanager.[リージョン].amazonaws.com の形式です。シークレット名はAPIリクエストのパラメータとして指定します。"
  },
  {
    id: 44,
    question: "Amazon Athenaのコンソールページは？",
    options: [
      "https://console.aws.amazon.com/athena/",
      "https://athena.aws.amazon.com/",
      "https://console.aws.amazon.com/amazon-athena/",
      "https://query.aws.amazon.com/"
    ],
    correctAnswer: 0,
    explanation: "Amazon Athenaのコンソールページは https://console.aws.amazon.com/athena/ です。"
  },
  {
    id: 45,
    question: "AWS CodePipelineのコンソールページは？",
    options: [
      "https://console.aws.amazon.com/codepipeline/",
      "https://codepipeline.aws.amazon.com/",
      "https://console.aws.amazon.com/code-pipeline/",
      "https://pipeline.aws.amazon.com/"
    ],
    correctAnswer: 0,
    explanation: "AWS CodePipelineのコンソールページは https://console.aws.amazon.com/codepipeline/ です。"
  },
  {
    id: 50,
    question: "Amazon Textractのコンソールページは？",
    options: [
      "https://console.aws.amazon.com/textract/",
      "https://textract.aws.amazon.com/",
      "https://console.aws.amazon.com/amazon-textract/",
      "https://ocr.aws.amazon.com/"
    ],
    correctAnswer: 0,
    explanation: "Amazon Textractのコンソールページは https://console.aws.amazon.com/textract/ です。"
  },
  {
    id: 51,
    question: "AWS Transfer Familyのコンソールページは？",
    options: [
      "https://console.aws.amazon.com/transfer/",
      "https://transfer.aws.amazon.com/",
      "https://console.aws.amazon.com/aws-transfer/",
      "https://ftp.aws.amazon.com/"
    ],
    correctAnswer: 0,
    explanation: "AWS Transfer Familyのコンソールページは https://console.aws.amazon.com/transfer/ です。"
  },
  {
    id: 52,
    question: "Amazon Comprehendのコンソールページは？",
    options: [
      "https://console.aws.amazon.com/comprehend/",
      "https://comprehend.aws.amazon.com/",
      "https://console.aws.amazon.com/amazon-comprehend/",
      "https://nlp.aws.amazon.com/"
    ],
    correctAnswer: 0,
    explanation: "Amazon Comprehendのコンソールページは https://console.aws.amazon.com/comprehend/ です。"
  },
  {
    id: 53,
    question: "AWS DataSyncのコンソールページは？",
    options: [
      "https://console.aws.amazon.com/datasync/",
      "https://datasync.aws.amazon.com/",
      "https://console.aws.amazon.com/data-sync/",
      "https://sync.aws.amazon.com/"
    ],
    correctAnswer: 0,
    explanation: "AWS DataSyncのコンソールページは https://console.aws.amazon.com/datasync/ です。"
  },
  {
    id: 54,
    question: "Amazon Rekognitionのコンソールページは？",
    options: [
      "https://console.aws.amazon.com/rekognition/",
      "https://rekognition.aws.amazon.com/",
      "https://console.aws.amazon.com/amazon-rekognition/",
      "https://vision.aws.amazon.com/"
    ],
    correctAnswer: 0,
    explanation: "Amazon Rekognitionのコンソールページは https://console.aws.amazon.com/rekognition/ です。"
  },
  {
    id: 56,
    question: "Amazon Pollyのコンソールページは？",
    options: [
      "https://console.aws.amazon.com/polly/",
      "https://polly.aws.amazon.com/",
      "https://console.aws.amazon.com/amazon-polly/",
      "https://tts.aws.amazon.com/"
    ],
    correctAnswer: 0,
    explanation: "Amazon Pollyのコンソールページは https://console.aws.amazon.com/polly/ です。"
  },
  {
    id: 58,
    question: "Amazon Transcribeのコンソールページは？",
    options: [
      "https://console.aws.amazon.com/transcribe/",
      "https://transcribe.aws.amazon.com/",
      "https://console.aws.amazon.com/amazon-transcribe/",
      "https://speech.aws.amazon.com/"
    ],
    correctAnswer: 0,
    explanation: "Amazon Transcribeのコンソールページは https://console.aws.amazon.com/transcribe/ です。"
  },
  {
    id: 59,
    question: "AWS Organizationsのコンソールページは？",
    options: [
      "https://console.aws.amazon.com/organizations/",
      "https://organizations.aws.amazon.com/",
      "https://console.aws.amazon.com/aws-organizations/",
      "https://accounts.aws.amazon.com/"
    ],
    correctAnswer: 0,
    explanation: "AWS Organizationsのコンソールページは https://console.aws.amazon.com/organizations/ です。"
  },
  {
    id: 60,
    question: "Amazon Translate のコンソールページは？",
    options: [
      "https://console.aws.amazon.com/translate/",
      "https://translate.aws.amazon.com/",
      "https://console.aws.amazon.com/amazon-translate/",
      "https://translation.aws.amazon.com/"
    ],
    correctAnswer: 0,
    explanation: "Amazon Translate のコンソールページは https://console.aws.amazon.com/translate/ です。"
  }
];
