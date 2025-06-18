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
    question: "Amazon S3のコンソールURLは？",
    options: [
      "https://s3.amazon.com/",
      "https://s3.aws.amazon.com/",
      "https://console.aws.amazon.com/s3/",
      "https://amazon.com/s3/"
    ],
    correctAnswer: 2,
    explanation: "S3のコンソールURLは https://console.aws.amazon.com/s3/ です。AWSのマネジメントコンソールは基本的に console.aws.amazon.com ドメインを使用しています。"
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
    explanation: "AWS Lambdaのコンソールは https://console.aws.amazon.com/lambda/ です。サービスページは aws.amazon.com/lambda/ ですが、コンソールは console.aws.amazon.com ドメインを使用します。"
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
      "https://console.aws.amazon.com/iam/",
      "https://amazon.aws.com/iam/"
    ],
    correctAnswer: 2,
    explanation: "AWS IAMのコンソールURLは https://console.aws.amazon.com/iam/ です。"
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
      "https://console.aws.amazon.com/cloudwatch/",
      "https://amazon.aws.com/cloudwatch/"
    ],
    correctAnswer: 2,
    explanation: "Amazon CloudWatchのコンソールURLは https://console.aws.amazon.com/cloudwatch/ です。"
  },
  {
    id: 11,
    question: "AWS Step Functionsのサービス紹介ページは？",
    options: [
      "https://aws.amazon.com/step-functions/",
      "https://stepfunctions.aws.amazon.com/",
      "https://amazon.com/step-functions/",
      "https://step-functions.amazon.com/"
    ],
    correctAnswer: 0,
    explanation: "AWS Step Functionsのサービス紹介ページは https://aws.amazon.com/step-functions/ です。ハイフンを含むサービス名も同様のパターンで、aws.amazon.com/[サービス名]/ の形式になります。"
  },
  {
    id: 12,
    question: "Amazon EKS (Elastic Kubernetes Service) のコンソールURLは？",
    options: [
      "https://eks.amazon.com/",
      "https://aws.amazon.com/eks/console/",
      "https://console.aws.amazon.com/eks/",
      "https://kubernetes.aws.amazon.com/"
    ],
    correctAnswer: 2,
    explanation: "Amazon EKSのコンソールURLは https://console.aws.amazon.com/eks/ です。他のAWSサービスと同様に、コンソールは console.aws.amazon.com/[サービス名]/ の形式です。"
  },
  {
    id: 13,
    question: "AWS Secrets Managerのサービス紹介ページは？",
    options: [
      "https://aws.amazon.com/secrets-manager/",
      "https://secrets-manager.aws.amazon.com/",
      "https://amazon.com/secrets-manager/",
      "https://aws.amazon.com/secretsmanager/"
    ],
    correctAnswer: 3,
    explanation: "AWS Secrets Managerのサービス紹介ページは https://aws.amazon.com/secretsmanager/ です。一部のサービスでは、URLにハイフンが含まれないことがあります。"
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
    question: "Amazon SageMakerのコンソールURLは？",
    options: [
      "https://sagemaker.amazon.com/",
      "https://aws.amazon.com/sagemaker/console/",
      "https://console.aws.amazon.com/sagemaker/",
      "https://ml.aws.amazon.com/sagemaker/"
    ],
    correctAnswer: 2,
    explanation: "Amazon SageMakerのコンソールURLは https://console.aws.amazon.com/sagemaker/ です。機械学習サービスも他のAWSサービスと同様のURLパターンに従っています。"
  },
  {
    id: 16,
    question: "AWS Billing and Cost Managementのコンソールページは？",
    options: [
      "https://billing.amazon.com/",
      "https://console.aws.amazon.com/billing/",
      "https://aws.amazon.com/billing/",
      "https://console.aws.amazon.com/cost-management/"
    ],
    correctAnswer: 1,
    explanation: "AWS Billing and Cost Managementのコンソールページは https://console.aws.amazon.com/billing/ です。請求関連のサービスも同様のパターンに従っています。"
  },
  {
    id: 17,
    question: "AWS Elastic Beanstalkのサービス紹介ページは？",
    options: [
      "https://aws.amazon.com/elasticbeanstalk/",
      "https://elasticbeanstalk.aws.amazon.com/",
      "https://aws.amazon.com/elastic-beanstalk/",
      "https://beanstalk.amazon.com/"
    ],
    correctAnswer: 0,
    explanation: "AWS Elastic Beanstalkのサービス紹介ページは https://aws.amazon.com/elasticbeanstalk/ です。このサービスはURLにハイフンを含まず、単語がつながっています。"
  },
  {
    id: 18,
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
  {
    id: 19,
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
    id: 20,
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
    id: 21,
    question: "Amazon ECR (Elastic Container Registry) のコンソールURLは？",
    options: [
      "https://ecr.amazon.com/",
      "https://console.aws.amazon.com/ecr/",
      "https://aws.amazon.com/ecr/console/",
      "https://containers.aws.amazon.com/"
    ],
    correctAnswer: 1,
    explanation: "Amazon ECRのコンソールURLは https://console.aws.amazon.com/ecr/ です。コンテナサービスも同様のパターンに従っています。"
  },
  {
    id: 22,
    question: "AWS Certificationのウェブサイトは？",
    options: [
      "https://aws.amazon.com/certification/",
      "https://certification.aws.amazon.com/",
      "https://aws.certification.com/",
      "https://amazon.com/aws-certification/"
    ],
    correctAnswer: 0,
    explanation: "AWS Certificationのウェブサイトは https://aws.amazon.com/certification/ です。認定プログラムは通常のサービス紹介ページと同じパターンに従っています。"
  },
  {
    id: 23,
    question: "AWS CloudShellのアクセスURLは？",
    options: [
      "https://cloudshell.aws.amazon.com/",
      "https://console.aws.amazon.com/cloudshell/",
      "https://shell.aws.amazon.com/",
      "https://aws.amazon.com/cloudshell/console/"
    ],
    correctAnswer: 1,
    explanation: "AWS CloudShellのアクセスURLは https://console.aws.amazon.com/cloudshell/ です。CloudShellもコンソールの一部として同じパターンに従っています。"
  },
  {
    id: 24,
    question: "AWS Partner Networkのウェブサイトは？",
    options: [
      "https://aws.amazon.com/partners/",
      "https://partners.aws.amazon.com/",
      "https://aws.partners/",
      "https://partner-network.aws.amazon.com/"
    ],
    correctAnswer: 0,
    explanation: "AWS Partner Networkのウェブサイトは https://aws.amazon.com/partners/ です。パートナープログラムも通常のサービス紹介ページと同じパターンに従っています。"
  },
  {
    id: 25,
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
    id: 26,
    question: "Amazon Cognito のコンソールURLは？",
    options: [
      "https://cognito.amazon.com/",
      "https://console.aws.amazon.com/cognito/",
      "https://aws.amazon.com/cognito/console/",
      "https://identity.aws.amazon.com/"
    ],
    correctAnswer: 1,
    explanation: "Amazon Cognito のコンソールURLは https://console.aws.amazon.com/cognito/ です。認証サービスも同様のパターンに従っています。"
  },
  {
    id: 27,
    question: "AWS Glueのサービス紹介ページは？",
    options: [
      "https://aws.amazon.com/glue/",
      "https://glue.aws.amazon.com/",
      "https://amazon.com/glue/",
      "https://data.aws.amazon.com/glue/"
    ],
    correctAnswer: 0,
    explanation: "AWS Glueのサービス紹介ページは https://aws.amazon.com/glue/ です。データ統合サービスも通常のサービス紹介ページと同じパターンに従っています。"
  },
  {
    id: 28,
    question: "AWS Consoleのモバイルアプリ紹介ページは？",
    options: [
      "https://aws.amazon.com/console/mobile/",
      "https://mobile.aws.amazon.com/",
      "https://aws.amazon.com/mobile-app/",
      "https://console.aws.amazon.com/mobile/"
    ],
    correctAnswer: 2,
    explanation: "AWS Consoleのモバイルアプリ紹介ページは https://aws.amazon.com/mobile-app/ です。モバイルアプリの紹介ページは通常と少し異なるパターンを使用しています。"
  },
  {
    id: 29,
    question: "AWS Supportのウェブサイトは？",
    options: [
      "https://aws.amazon.com/support/",
      "https://support.aws.amazon.com/",
      "https://console.aws.amazon.com/support/",
      "https://amazon.com/aws-support/"
    ],
    correctAnswer: 0,
    explanation: "AWS Supportのウェブサイトは https://aws.amazon.com/support/ です。サポートサービスの紹介ページは通常のパターンに従っています。一方、サポートセンターへのアクセスは https://console.aws.amazon.com/support/ になります。"
  },
  {
    id: 30,
    question: "AWS Eventのウェブサイトは？",
    options: [
      "https://aws.amazon.com/events/",
      "https://events.aws.amazon.com/",
      "https://aws.events/",
      "https://amazon.com/aws-events/"
    ],
    correctAnswer: 0,
    explanation: "AWS Eventのウェブサイトは https://aws.amazon.com/events/ です。イベント情報も通常のサービス紹介ページと同じパターンに従っています。"
  },
  {
    id: 31,
    question: "Amazon CloudFrontで配信するウェブサイトのデフォルトドメインは？",
    options: [
      "example.cloudfront.net",
      "example.cloudfront.aws",
      "example.cloudfront.amazon.com",
      "example.cdn.amazonaws.com"
    ],
    correctAnswer: 0,
    explanation: "Amazon CloudFrontで配信するウェブサイトのデフォルトドメインは [ディストリビューションID].cloudfront.net の形式です。このドメインは独自ドメインにCNAMEで置き換えることができます。"
  },
  {
    id: 32,
    question: "Amazon S3で静的ウェブサイトホスティングを使用する場合のデフォルトURLは？",
    options: [
      "bucket-name.s3.amazonaws.com",
      "bucket-name.s3-website-region.amazonaws.com",
      "bucket-name.s3.region.amazonaws.com",
      "bucket-name.static.amazonaws.com"
    ],
    correctAnswer: 1,
    explanation: "Amazon S3の静的ウェブサイトホスティングを使用する場合のデフォルトURLは bucket-name.s3-website-region.amazonaws.com または bucket-name.s3-website.region.amazonaws.com の形式です。これは通常のS3オブジェクトアクセスURL（bucket-name.s3.amazonaws.com）とは異なります。"
  },
  {
    id: 33,
    question: "AWS Amplifyでホストされるウェブアプリのデフォルトドメインは？",
    options: [
      "branch-name.app-id.amplify.aws",
      "branch-name.app-id.amplifyapp.com",
      "app-id.amplify.amazonaws.com",
      "branch-name.amplify.amazon.com"
    ],
    correctAnswer: 1,
    explanation: "AWS Amplifyでホストされるウェブアプリのデフォルトドメインは branch-name.app-id.amplifyapp.com の形式です。Amplifyでは、カスタムドメインを設定することも可能です。"
  },
  {
    id: 34,
    question: "Amazon API Gatewayで作成したAPIのデフォルトエンドポイントURLは？",
    options: [
      "api-id.execute-api.region.amazonaws.com",
      "api-id.apigateway.region.amazonaws.com",
      "api-id.api.aws.amazon.com",
      "api-id.gateway.region.aws"
    ],
    correctAnswer: 0,
    explanation: "Amazon API Gatewayで作成したAPIのデフォルトエンドポイントURLは api-id.execute-api.region.amazonaws.com の形式です。API Gatewayではカスタムドメイン名を設定することも可能です。"
  },
  {
    id: 35,
    question: "AWS Elastic Beanstalkアプリケーションのデフォルトドメインは？",
    options: [
      "environment-name.elasticbeanstalk.com",
      "environment-name.region.elasticbeanstalk.com",
      "environment-name.eb.amazonaws.com",
      "app-name.elasticbeanstalk.region.amazonaws.com"
    ],
    correctAnswer: 1,
    explanation: "AWS Elastic Beanstalkアプリケーションのデフォルトドメインは environment-name.region.elasticbeanstalk.com の形式です。Elastic Beanstalkでは、Route 53などを使用してカスタムドメインを設定することができます。"
  },
  {
    id: 36,
    question: "Amazon AppRunnerサービスのデフォルトドメインは？",
    options: [
      "service-id.apprunner.aws",
      "service-id.apprunner.amazon.com",
      "service-id.run.aws.amazon.com",
      "service-id.awsapprunner.com"
    ],
    correctAnswer: 3,
    explanation: "Amazon AppRunnerサービスのデフォルトドメインは service-id.awsapprunner.com の形式です。AppRunnerでもカスタムドメインを設定することが可能です。"
  },
  {
    id: 37,
    question: "AWS App Runnerサービスのカスタムドメインを設定するには、どのAWSサービスを使用しますか？",
    options: [
      "AWS Certificate Manager (ACM)のみ",
      "Amazon Route 53のみ",
      "AWS Certificate Manager (ACM)とAmazon Route 53の両方",
      "AWS CloudFront"
    ],
    correctAnswer: 2,
    explanation: "AWS App Runnerサービスにカスタムドメインを設定するには、通常AWS Certificate Manager (ACM)で証明書を発行し、Amazon Route 53でDNSレコードを設定します。両方のサービスを組み合わせて使用することで、安全なカスタムドメイン設定が可能になります。"
  },
  {
    id: 38,
    question: "Amazon LightsailのWordPressインスタンスのデフォルトドメインは？",
    options: [
      "instance-name.lightsail.aws",
      "instance-name.lightsailapp.com",
      "instance-name.region.lightsail.amazonaws.com",
      "instance-public-ip.ip.aws.amazon.com"
    ],
    correctAnswer: 1,
    explanation: "Amazon LightsailのWordPressインスタンスのデフォルトドメインは instance-name.lightsailapp.com の形式です。Lightsailでは、静的IPを割り当てたり、独自ドメインを設定したりすることも可能です。"
  },
  {
    id: 39,
    question: "AWS Amplify Hostingで独自ドメインを設定する際に必要なAWSサービスは？",
    options: [
      "Amazon Route 53のみ",
      "AWS Certificate Manager (ACM)のみ",
      "Amazon Route 53とAWS Certificate Manager (ACM)",
      "AWS CloudFrontとAmazon S3"
    ],
    correctAnswer: 2,
    explanation: "AWS Amplify Hostingで独自ドメインを設定するには、通常Amazon Route 53でドメインを管理し、AWS Certificate Manager (ACM)でSSL/TLS証明書を発行します。Amplifyコンソールからこれらのサービスと連携して設定を行います。"
  },
  {
    id: 40,
    question: "Amazon Cognito User Poolのホストされたログインページのデフォルトドメインは？",
    options: [
      "auth.region.amazoncognito.com",
      "domain-prefix.auth.region.amazoncognito.com",
      "cognito-idp.region.amazonaws.com",
      "auth.cognito.region.aws.amazon.com"
    ],
    correctAnswer: 1,
    explanation: "Amazon Cognito User Poolのホストされたログインページのデフォルトドメインは domain-prefix.auth.region.amazoncognito.com の形式です。Cognitoでは、独自ドメインを設定することも可能です。"
  }
];
