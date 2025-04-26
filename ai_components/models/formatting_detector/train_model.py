import torch
import torchvision
from torchvision import transforms
from torch.utils.data import DataLoader

class FormattingDataset(Dataset):
    def __init__(self, image_paths, transform=None):
        self.image_paths = image_paths
        self.transform = transform
        
    def __len__(self):
        return len(self.image_paths)
    
    def __getitem__(self, idx):
        image = Image.open(self.image_paths[idx])
        if self.transform:
            image = self.transform(image)
        return image

class FormattingDetector(nn.Module):
    def __init__(self):
        super().__init__()
        self.base = torchvision.models.resnet18(pretrained=True)
        self.base.fc = nn.Linear(512, 1)
        
    def forward(self, x):
        return torch.sigmoid(self.base(x))

def train():
    transform = transforms.Compose([
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
    ])
    
    dataset = FormattingDataset(
        image_paths=GLOB.glob('../data/sample_resumes/*.png'),
        transform=transform
    )
    
    model = FormattingDetector()
    criterion = nn.BCELoss()
    optimizer = torch.optim.Adam(model.parameters(), lr=1e-4)
    
    # Training loop
    for epoch in range(10):
        for images in dataloader:
            outputs = model(images)
            loss = criterion(outputs, labels)
            
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()
