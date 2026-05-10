import aioboto3
from app.core.config import settings

class StorageService:
    def __init__(self):
        self.session = aioboto3.Session()
        self.endpoint_url = f"http://{settings.MINIO_ENDPOINT}"
        self.access_key = settings.MINIO_ACCESS_KEY
        self.secret_key = settings.MINIO_SECRET_KEY

    async def upload_file(self, file_data: bytes, bucket_name: str, object_name: str, content_type: str):
        async with self.session.client(
            's3',
            endpoint_url=self.endpoint_url,
            aws_access_key_id=self.access_key,
            aws_secret_access_key=self.secret_key,
            region_name='us-east-1' # MinIO default
        ) as s3:
            # Ensure bucket exists
            try:
                await s3.head_bucket(Bucket=bucket_name)
            except:
                await s3.create_bucket(Bucket=bucket_name)
            
            await s3.put_object(
                Bucket=bucket_name,
                Key=object_name,
                Body=file_data,
                ContentType=content_type
            )
            return f"{self.endpoint_url}/{bucket_name}/{object_name}"

storage_service = StorageService()
