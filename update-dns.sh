#!/bin/bash
# Update Loopia DNS for adorable.se

source ~/.env.loopia

DOMAIN="adorable.se"
SUBDOMAIN="@"

# Loopia XML-RPC API endpoint
API_URL="https://api.loopia.se/RPCSERV"

# Get existing DNS records first
echo "Fetching existing DNS records for $DOMAIN..."

# Add A record for @ -> Vercel
echo "Adding A record: @ -> 76.76.21.21"
curl -s -X POST "$API_URL" \
  -u "$LOOPIA_USER:$LOOPIA_PASS" \
  -H "Content-Type: text/xml" \
  -d "<?xml version='1.0'?>
<methodCall>
  <methodName>addZoneRecord</methodName>
  <params>
    <param><value><string>$LOOPIA_USER</string></value></param>
    <param><value><string>$LOOPIA_PASS</string></value></param>
    <param><value><string>$DOMAIN</string></value></param>
    <param><value><string>$SUBDOMAIN</string></value></param>
    <param>
      <value>
        <struct>
          <member>
            <name>type</name>
            <value><string>A</string></value>
          </member>
          <member>
            <name>rdata</name>
            <value><string>76.76.21.21</string></value>
          </member>
          <member>
            <name>ttl</name>
            <value><int>3600</int></value>
          </member>
          <member>
            <name>priority</name>
            <value><int>0</int></value>
          </member>
        </struct>
      </value>
    </param>
  </params>
</methodCall>"

echo ""
echo "Adding CNAME record: www -> cname.vercel-dns.com"
curl -s -X POST "$API_URL" \
  -u "$LOOPIA_USER:$LOOPIA_PASS" \
  -H "Content-Type: text/xml" \
  -d "<?xml version='1.0'?>
<methodCall>
  <methodName>addZoneRecord</methodName>
  <params>
    <param><value><string>$LOOPIA_USER</string></value></param>
    <param><value><string>$LOOPIA_PASS</string></value></param>
    <param><value><string>$DOMAIN</string></value></param>
    <param><value><string>www</string></value></param>
    <param>
      <value>
        <struct>
          <member>
            <name>type</name>
            <value><string>CNAME</string></value>
          </member>
          <member>
            <name>rdata</name>
            <value><string>cname.vercel-dns.com</string></value>
          </member>
          <member>
            <name>ttl</name>
            <value><int>3600</int></value>
          </member>
          <member>
            <name>priority</name>
            <value><int>0</int></value>
          </member>
        </struct>
      </value>
    </param>
  </params>
</methodCall>"

echo ""
echo "DNS records updated! Checking..."

# List current records
curl -s -X POST "$API_URL" \
  -u "$LOOPIA_USER:$LOOPIA_PASS" \
  -H "Content-Type: text/xml" \
  -d "<?xml version='1.0'?>
<methodCall>
  <methodName>getZoneRecords</methodName>
  <params>
    <param><value><string>$LOOPIA_USER</string></value></param>
    <param><value><string>$LOOPIA_PASS</string></value></param>
    <param><value><string>$DOMAIN</string></value></param>
    <param><value><string>$SUBDOMAIN</string></value></param>
  </params>
</methodCall>"

echo ""
echo "Done! DNS may take up to 24h to propagate (usually <1h)"
