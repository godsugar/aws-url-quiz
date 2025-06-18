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
  }
];
