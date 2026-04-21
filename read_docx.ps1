param([string]$Path)

$docXmlPath = ".\temp_docx_extract\word\document.xml"
Copy-Item $Path -Destination ".\Copy_lading.zip" -Force
Expand-Archive -Path ".\Copy_lading.zip" -DestinationPath ".\temp_docx_extract" -Force

[xml]$docXml = Get-Content -Path $docXmlPath -Raw

foreach ($p in $docXml.document.body.p) {
    $text = ""
    if ($p.r) {
        foreach ($r in $p.r) {
            if ($r.t) {
                if ($r.t.GetType().Name -eq 'String') {
                    $text += $r.t
                } else {
                    $text += $r.t.'#text'
                }
            }
        }
    }
    if ($text) {
        Write-Output $text
    }
}

Remove-Item -Recurse -Force ".\temp_docx_extract"
Remove-Item -Force ".\Copy_lading.zip"
